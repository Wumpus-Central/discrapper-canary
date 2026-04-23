"use strict";
n.d(t, { A: () => w }), n(321073), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(607399),
    c = n(465532),
    d = n(608299),
    _ = n(23658),
    f = n(155718),
    p = n(565150),
    h = n(861382),
    E = n(626584),
    m = n(522602),
    g = n(234320),
    A = n(453771),
    I = n(741394),
    T = n(355622),
    S = n(408018),
    y = n(579940),
    N = n(177686),
    v = n(133684),
    C = n(827977),
    O = n(323350),
    R = n(652215),
    b = n(985018),
    D = n(266599);
new E.A("ChannelEditor.tsx");
let L = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class w extends i.Component {
    ref = i.createRef();
    _focusBlurQueue = Promise.resolve();
    _unsubscribe;
    _initTimeoutId = null;
    _cachedEditorWindow = null;
    constructor(e) {
        super(e),
            (this._unsubscribe = y.Y0.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = { focused: !1, submitting: !1, popup: y.Y0.getState() });
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
            (this._initTimeoutId = setTimeout(() => void this._getEditorWindow(), 1e3));
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            let e;
            (e = this.props.useSlate ? this.props.textValue : (0, O.WO)(this.props.richValue, { mode: "plain" })),
                this.props.onChange?.(null, e, (0, S.x7)(e));
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
    insertKaomoji(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        if (null != e && null != n) {
            let r = t.length > 0 ? e.replace(/([_`´*])/g, "\\$1") : e;
            t.length > 0 && !t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText(r, void 0, !0);
        }
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
        return e && !n ? (r ? "" : b.intl.string(b.t.IYKTTc)) : t;
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
                onKeyDown: s,
                onResize: o,
                onSubmit: l,
                onSubmitFailure: c,
                channel: d,
                type: _,
                useSlate: f,
                spellcheckEnabled: p,
                useNewSlashCommands: h,
                canOnlyUseTextCommands: E,
                className: m,
                id: A,
                required: I,
                maxCharacterCount: y,
                allowNewLines: N,
                "aria-describedby": O,
                "aria-labelledby": b,
                accessibilityLabel: L,
                showValueWhenDisabled: w,
            } = this.props,
            { submitting: M, popup: P } = this.state,
            x = {
                channel: d,
                className: a()(m, D.Tg, { [D.w5]: f, [D.Rr]: n || M }),
                id: A,
                placeholder: this.getPlaceholder(),
                required: I,
                accessibilityLabel: L,
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
                allowNewLines: N,
                onChange: i,
                onResize: o,
                onKeyDown: s,
                onSubmit: l,
                textAreaPaddingClassName: a()({
                    [D.H$]: _ === T.oU.CREATE_FORUM_POST,
                    [D.g_]: _ === T.oU.CUSTOM_GIFT,
                    [D.Yg]: _ === T.oU.USER_PROFILE,
                    [D.$$]: _ === T.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: p,
                useNewSlashCommands: h,
                disableAutoFocus: u.Fr || (_.disableAutoFocus ?? !1),
                disableEnterToSubmit: _.submit?.disableEnterToSubmit ?? !1,
                "aria-controls": P.id ?? void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== P.id || void 0,
                "aria-activedescendant": P.activeDescendant ?? void 0,
                "aria-invalid": e.length > y,
                "aria-describedby": O,
                "aria-labelledby": b,
                "aria-autocomplete": "list",
            },
            k = f
                ? (0, r.jsx)(C.A, {
                      ref: this.ref,
                      ...x,
                      type: _,
                      value: n && !w ? (0, S.x7)("") : t,
                      canUseCommands: _.commands?.enabled,
                      canOnlyUseTextCommands: E,
                      onSubmitFailure: c,
                  })
                : (0, r.jsx)(v.A, { ref: this.ref, ...x, value: n && !w ? "" : e });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(g.EG, { event: R.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, r.jsx)(g.EG, { event: R.jej.CLEAR_TEXT, handler: this.handleClearText }),
                k,
            ],
        });
    }
    handleSaveCurrentText = (e) => {
        c.A.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
    };
    handleClearText = () => {
        this.props.onChange?.(null, "", (0, S.x7)(""));
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
                promptToUpload: s,
                maxCharacterCount: a,
                type: o,
            } = this.props,
            l = null != t ? (0, N.VG)(t) : null,
            u = (0, N.W7)(),
            c = (0, N.qH)(t, this._getEditorWindow()) ? n : (l ?? u ?? n);
        if (null == s || (!c.isPrivate() && !r) || (c.isPrivate() && c.isManaged())) return !1;
        let { files: E, errors: g } = (function (e, t) {
            let n = [],
                r = [],
                i = null,
                s = null,
                a = [];
            for (let t of e.items)
                if ("file" === t.kind) {
                    let e = t.webkitGetAsEntry?.() ?? t.getAsEntry?.() ?? null;
                    if (null != e && !1 === e.isFile) {
                        a.push({ item: t, error: "is_directory" });
                        continue;
                    }
                    let i = t.getAsFile();
                    if (null == i) continue;
                    null != i.path && i.path.length > 0 ? n.push(i) : r.push(i);
                } else
                    "string" === t.kind &&
                        ("text/plain" === t.type && null == i
                            ? (i = t)
                            : "text/html" === t.type && null == s && (s = t));
            if (n.length > 0) return { files: n, errors: a };
            if (r.length > 0) {
                if (1 === r.length && "image/png" === r[0].type && null != s) {
                    let t = r[0],
                        n =
                            (function (e) {
                                let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
                                if (null != t) {
                                    let e;
                                    try {
                                        let { pathname: n } = new URL(t.src);
                                        null != n && n.length > 0 && (e = (0, I.kh)(n));
                                    } catch {}
                                    if (null != e && e.length > 0) return `${e}.png`;
                                }
                            })(e.getData(s.type)) ?? t.name;
                    return { files: [(0, A.VE)(t, n, t.type)], errors: a };
                }
                return { files: r, errors: a };
            }
            if (null != i && null != t) {
                let n = e.getData(i.type);
                if (n.length > t) {
                    let e = new Blob([n], { type: "text/plain" });
                    return { files: [(0, A.VE)(e, "message.txt", "text/plain")], convertedStringToFile: !0, errors: a };
                }
            }
            return { files: [], errors: a };
        })(e.clipboardData, o.uploadLongMessages ? (i ?? a) : null);
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
        0 === E.length)
            ? (g?.some((e) => {
                  let { error: t } = e;
                  return "is_directory" === t;
              }) && (0, _.openUploadError)({ title: b.intl.string(b.t.azO1Pe), help: b.intl.string(b.t["Koklr/"]) }),
              !1)
            : (e.preventDefault(),
              e.stopPropagation(),
              this.saveCurrentText(),
              ((e) => {
                  let t = h.A.getActiveCommand(c.id);
                  if (null == t) return s(e, c, o.drafts.type, { requireConfirm: !0, origin: "clipboard" });
                  let n = o.drafts.commandType ?? o.drafts.type,
                      r = null,
                      i = h.A.getActiveOption(c.id);
                  null !=
                      (r =
                          i?.type === f.n4.ATTACHMENT
                              ? i
                              : t.options?.find((e) => {
                                    if (e.type === f.n4.ATTACHMENT) return null == m.A.getUpload(c.id, e.name, n);
                                })) &&
                      d.A.setFile({
                          channelId: c.id,
                          id: r.name,
                          draftType: n,
                          file: { id: r.name, platform: p.xz.WEB, file: e[0] },
                      });
              })(E),
              this.focus(),
              !0);
    };
}
