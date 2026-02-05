"use strict";
n.d(t, { A: () => x }), n(321073), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(607399),
    c = n(465532),
    d = n(608299),
    _ = n(23658),
    f = n(155718),
    p = n(565150),
    h = n(861382),
    m = n(626584),
    g = n(522602),
    E = n(234320),
    A = n(453771),
    I = n(741394),
    T = n(355622),
    y = n(408018),
    S = n(579940),
    v = n(177686),
    C = n(133684),
    b = n(827977),
    N = n(323350),
    R = n(652215),
    O = n(985018),
    D = n(111314);
new m.A("ChannelEditor.tsx");
let L = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    },
    w = 1e3;
class x extends i.Component {
    ref = i.createRef();
    _focusBlurQueue = Promise.resolve();
    _unsubscribe;
    _initTimeoutId = null;
    _cachedEditorWindow = null;
    constructor(e) {
        super(e),
            (this._unsubscribe = S.Y0.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = { focused: !1, submitting: !1, popup: S.Y0.getState() });
    }
    _getEditorWindow() {
        let e = this.ref?.current?.getSlateEditor?.()?.windowContext?.renderWindow;
        if (null == this._cachedEditorWindow || this._cachedEditorWindow !== e) {
            if (null != this._cachedEditorWindow && null == e) return null;
            this._cachedEditorWindow = e ?? window;
        }
        return this._cachedEditorWindow;
    }
    componentDidMount() {
        this.props.focused && requestAnimationFrame(() => this.focus()),
            document.addEventListener("selectionchange", this.handleSelectionChange),
            window.addEventListener("beforeunload", this.handleBeforeUnload),
            (this._initTimeoutId = setTimeout(() => void this._getEditorWindow(), w));
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            let e;
            (e = this.props.useSlate ? this.props.textValue : (0, N.WO)(this.props.richValue, { mode: "plain" })),
                this.props.onChange?.(null, e, (0, y.x7)(e));
        } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled();
    }
    componentWillUnmount() {
        this.saveCurrentText(),
            this._unsubscribe?.(),
            window.removeEventListener("beforeunload", this.handleBeforeUnload),
            document.removeEventListener("selectionchange", this.handleSelectionChange),
            (this._focusBlurQueue = null),
            (this._unsubscribe = null),
            (this._cachedEditorWindow = null),
            null != this._initTimeoutId && clearTimeout(this._initTimeoutId);
    }
    handleSelectionChange = () => {
        this.props.focused && this.props.onSelectionChanged(document.getSelection?.()?.toString());
    };
    focus = () => {
        this._focusBlurQueue?.then(() => {
            this.setState({ focused: !0 }, () => {
                let e = this.ref.current;
                null != e && e.focus();
            });
        });
    };
    blur() {
        let e = this.ref.current;
        null != e && e.blur();
    }
    submit(e) {
        this.ref.current?.submit(e);
    }
    insertEmoji(e) {
        let { emoji: t, willClose: n } = e,
            r = this.ref.current;
        null != t && null != r && (r.insertEmoji({ emoji: t, addSpace: n }), n && this.focus());
    }
    insertGIF(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        null != e && null != n && (t.endsWith(" ") || n.insertText(" ", void 0, !1), n.insertText(e.url));
    }
    insertSound(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        null != e &&
            null != n &&
            (t.endsWith(" ") || n.insertText(" ", void 0, !1),
            n.insertText(`<sound:${e.guildId}:${e.soundId}>`, void 0, !0));
    }
    handleOuterClick() {
        this.focus();
    }
    clearValue() {
        let { channel: e, type: t } = this.props;
        this.setState({ focused: !0, submitting: !1 }), c.A.saveDraft(e.id, "", t.drafts.type);
    }
    getCurrentWord() {
        let e = this.ref.current;
        return e?.getCurrentWord() ?? { word: null, isAtStart: !1 };
    }
    insertAutocomplete(e, t, n) {
        let r = this.ref.current;
        return r?.insertAutocomplete(e, t, n);
    }
    insertInlineAutocompleteElement(e) {
        let t = this.ref.current;
        return t?.insertInlineAutocompleteInput(e);
    }
    replaceInlineAutocompleteInput(e, t, n) {
        let r = this.ref.current;
        return r?.replaceInlineAutocompleteInput(e, t, n);
    }
    getCurrentCommandOption() {
        let e = this.ref.current;
        return e?.getCurrentCommandOption?.() ?? null;
    }
    getCurrentCommandOptionValue() {
        let e = this.ref.current;
        return e?.getCurrentCommandOptionValue?.() ?? [];
    }
    getCommandOptionValues() {
        let e = this.ref.current;
        return e?.getCommandOptionValues?.() ?? {};
    }
    getFirstText() {
        let e = this.ref.current;
        return e?.getFirstText() ?? null;
    }
    getSlateEditor() {
        let e = this.ref.current;
        return e?.getSlateEditor?.() ?? null;
    }
    fixFocus(e) {
        e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus();
    }
    appendText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        this.ref.current?.insertText(e, t, n);
    }
    saveCurrentText = (() => {
        var e = this;
        return function () {
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                { type: n, channel: r } = e.props;
            n.drafts.autoSave && (t && e.saveCurrentTextThrottled.cancel(), e.handleSaveCurrentText(r.id));
        };
    })();
    handleBeforeUnload = () => this.saveCurrentText();
    saveCurrentTextThrottled = l().throttle(this.saveCurrentText.bind(this, !1), 500);
    getPlaceholder() {
        let { disabled: e, placeholder: t, isPreviewing: n, showValueWhenDisabled: r } = this.props;
        return e && !n ? (r ? "" : O.intl.string(O.t.IYKTTc)) : t;
    }
    handleEnter = (e) => this.props.onEnter?.(e);
    handleTab = () => this.props.onTab?.();
    handleMoveSelection = (e) => this.props.onMoveSelection?.(e);
    maybeShowAutocomplete = () => this.props.onMaybeShowAutocomplete?.();
    hideAutocomplete = () => this.props.onHideAutocomplete?.();
    render() {
        let {
                textValue: e,
                richValue: t,
                disabled: n,
                onChange: i,
                onKeyDown: a,
                onResize: o,
                onSubmit: l,
                onSubmitFailure: c,
                channel: d,
                type: _,
                useSlate: f,
                spellcheckEnabled: p,
                useNewSlashCommands: h,
                canOnlyUseTextCommands: m,
                className: g,
                id: A,
                required: I,
                maxCharacterCount: S,
                allowNewLines: v,
                isEditorIdle: N,
                currentAutocompleteType: O,
                "aria-describedby": L,
                "aria-labelledby": w,
                accessibilityLabel: x,
                showValueWhenDisabled: P,
            } = this.props,
            { submitting: M, popup: k } = this.state,
            U = {
                channel: d,
                className: s()(g, D.Tg, { [D.w5]: f, [D.Rr]: n || M }),
                id: A,
                placeholder: this.getPlaceholder(),
                required: I,
                accessibilityLabel: x,
                disabled: n || !1,
                submitting: M,
                isEdit: _ === T.oU.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: v,
                onChange: i,
                onResize: o,
                onKeyDown: a,
                onSubmit: l,
                textAreaPaddingClassName: s()({
                    [D.H$]: _ === T.oU.CREATE_FORUM_POST,
                    [D.g_]: _ === T.oU.CUSTOM_GIFT,
                    [D.Yg]: _ === T.oU.USER_PROFILE,
                    [D.$$]: _ === T.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: p,
                useNewSlashCommands: h,
                isEditorIdle: N,
                currentAutocompleteType: O,
                disableAutoFocus: u.Fr || (_.disableAutoFocus ?? !1),
                disableEnterToSubmit: _.submit?.disableEnterToSubmit ?? !1,
                "aria-controls": k.id ?? void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== k.id || void 0,
                "aria-activedescendant": k.activeDescendant ?? void 0,
                "aria-invalid": e.length > S,
                "aria-describedby": L,
                "aria-labelledby": w,
                "aria-autocomplete": "list",
            },
            G = f
                ? (0, r.jsx)(b.A, {
                      ref: this.ref,
                      ...U,
                      type: _,
                      value: n && !P ? (0, y.x7)("") : t,
                      canUseCommands: _.commands?.enabled,
                      canOnlyUseTextCommands: m,
                      onSubmitFailure: c,
                  })
                : (0, r.jsx)(C.A, { ref: this.ref, ...U, value: n && !P ? "" : e });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(E.EG, { event: R.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, r.jsx)(E.EG, { event: R.jej.CLEAR_TEXT, handler: this.handleClearText }),
                G,
            ],
        });
    }
    handleSaveCurrentText = (e) => {
        c.A.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
    };
    handleClearText = () => {
        this.props.onChange?.(null, "", (0, y.x7)(""));
    };
    handleInsertText = (e) => {
        let { plainText: t, rawText: n, addSpace: r = !1 } = e;
        this.props.disabled || (this.appendText(t, n, r), this.focus());
    };
    handleFocus = (e) => {
        let { onFocus: t } = this.props,
            { focused: n } = this.state;
        t?.(e), n || this.setState({ focused: !0 });
    };
    handleBlur = (e) => {
        let { onBlur: t } = this.props,
            { focused: n } = this.state;
        t?.(e), n && this.setState({ focused: !1 });
    };
    handlePaste = (e) => {
        let t = e.target?.ownerDocument?.defaultView,
            {
                channel: n,
                canPasteFiles: r,
                uploadPromptCharacterCount: i,
                promptToUpload: a,
                maxCharacterCount: s,
                type: o,
            } = this.props,
            l = null != t ? (0, v.VG)(t) : null,
            u = (0, v.W7)(),
            c = l ?? u ?? n,
            m = (0, v.qH)(t, this._getEditorWindow()) ? n : c;
        if (null == a || (!m.isPrivate() && !r) || (m.isPrivate() && m.isManaged())) return !1;
        let E = (e) => {
                let t = h.A.getActiveCommand(m.id);
                if (null == t) return a(e, m, o.drafts.type, { requireConfirm: !0, origin: "clipboard" });
                let n = o.drafts.commandType ?? o.drafts.type,
                    r = null,
                    i = h.A.getActiveOption(m.id);
                null !=
                    (r =
                        i?.type === f.n4.ATTACHMENT
                            ? i
                            : t.options?.find((e) => {
                                  if (e.type === f.n4.ATTACHMENT) return null == g.A.getUpload(m.id, e.name, n);
                              })) &&
                    d.A.setFile({
                        channelId: m.id,
                        id: r.name,
                        draftType: n,
                        file: { id: r.name, platform: p.xz.WEB, file: e[0] },
                    });
            },
            A = i ?? s,
            { files: I, errors: T } = P(e.clipboardData, o.uploadLongMessages ? A : null);
        return (L(
            "onPaste",
            [...e.clipboardData.items].map((e) => {
                if ("file" !== e.kind) return { kind: e.kind, type: e.type };
                {
                    let t = e.getAsFile();
                    return { kind: e.kind, type: e.type, name: t?.name, path: t?.path };
                }
            }),
        ),
        0 === I.length)
            ? (T?.some((e) => {
                  let { error: t } = e;
                  return "is_directory" === t;
              }) && (0, _.openUploadError)({ title: O.intl.string(O.t.azO1Pe), help: O.intl.string(O.t["Koklr/"]) }),
              !1)
            : (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), E(I), this.focus(), !0);
    };
}
function P(e, t) {
    let n = [],
        r = [],
        i = null,
        a = null,
        s = [];
    for (let t of e.items)
        if ("file" === t.kind) {
            let e = t.webkitGetAsEntry?.() ?? t.getAsEntry?.() ?? null;
            if (null != e && !1 === e.isFile) {
                s.push({ item: t, error: "is_directory" });
                continue;
            }
            let i = t.getAsFile();
            if (null == i) continue;
            null != i.path && i.path.length > 0 ? n.push(i) : r.push(i);
        } else
            "string" === t.kind &&
                ("text/plain" === t.type && null == i ? (i = t) : "text/html" === t.type && null == a && (a = t));
    if (n.length > 0) return { files: n, errors: s };
    if (r.length > 0) {
        if (1 === r.length && "image/png" === r[0].type && null != a) {
            let t = r[0],
                n = M(e.getData(a.type)) ?? t.name;
            return { files: [(0, A.VE)(t, n, t.type)], errors: s };
        }
        return { files: r, errors: s };
    }
    if (null != i && null != t) {
        let n = e.getData(i.type);
        if (n.length > t) {
            let e = new Blob([n], { type: "text/plain" });
            return { files: [(0, A.VE)(e, "message.txt", "text/plain")], convertedStringToFile: !0, errors: s };
        }
    }
    return { files: [], errors: s };
}
function M(e) {
    let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
    if (null != t) {
        let e;
        try {
            let { pathname: n } = new URL(t.src);
            null != n && n.length > 0 && (e = (0, I.kh)(n));
        } catch {}
        if (null != e && e.length > 0) return `${e}.png`;
    }
}
