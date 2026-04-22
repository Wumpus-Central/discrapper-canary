"use strict";
n.d(t, { A: () => L }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    c = n(607399),
    u = n(465532),
    d = n(608299),
    h = n(23658),
    m = n(155718),
    p = n(565150),
    f = n(861382),
    g = n(626584),
    _ = n(522602),
    x = n(234320),
    A = n(453771),
    C = n(741394),
    E = n(355622),
    I = n(408018),
    v = n(579940),
    y = n(177686),
    S = n(133684),
    b = n(827977),
    N = n(323350),
    T = n(652215),
    j = n(985018),
    R = n(266599);
new g.A("ChannelEditor.tsx");
let w = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class L extends l.Component {
    ref = l.createRef();
    _focusBlurQueue = Promise.resolve();
    _unsubscribe;
    _initTimeoutId = null;
    _cachedEditorWindow = null;
    constructor(e) {
        super(e),
            (this._unsubscribe = v.Y0.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = { focused: !1, submitting: !1, popup: v.Y0.getState() });
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
            (e = this.props.useSlate ? this.props.textValue : (0, N.WO)(this.props.richValue, { mode: "plain" })),
                this.props.onChange?.(null, e, (0, I.x7)(e));
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
            i = this.ref.current;
        null != t && null != i && (i.insertEmoji({ emoji: t, addSpace: n }), n && this.focus());
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
            let i = t.length > 0 ? e.replace(/([_`´*])/g, "\\$1") : e;
            t.length > 0 && !t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText(i, void 0, !0);
        }
    }
    handleOuterClick() {
        this.focus();
    }
    clearValue() {
        let { channel: e, type: t } = this.props;
        this.setState({ focused: !0, submitting: !1 }), u.A.saveDraft(e.id, "", t.drafts.type);
    }
    getCurrentWord() {
        let e = this.ref.current;
        return e?.getCurrentWord() ?? { word: null, isAtStart: !1 };
    }
    insertAutocomplete(e, t, n) {
        let i = this.ref.current;
        return i?.insertAutocomplete(e, t, n);
    }
    insertInlineAutocompleteElement(e) {
        let t = this.ref.current;
        return t?.insertInlineAutocompleteInput(e);
    }
    replaceInlineAutocompleteInput(e, t, n) {
        let i = this.ref.current;
        return i?.replaceInlineAutocompleteInput(e, t, n);
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
                { type: n, channel: i } = e.props;
            n.drafts.autoSave && (t && e.saveCurrentTextThrottled.cancel(), e.handleSaveCurrentText(i.id));
        };
    })();
    handleBeforeUnload = () => this.saveCurrentText();
    saveCurrentTextThrottled = o().throttle(this.saveCurrentText.bind(this, !1), 500);
    getPlaceholder() {
        let { disabled: e, placeholder: t, isPreviewing: n, showValueWhenDisabled: i } = this.props;
        return e && !n ? (i ? "" : j.intl.string(j.t.IYKTTc)) : t;
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
                onChange: l,
                onKeyDown: s,
                onResize: a,
                onSubmit: o,
                onSubmitFailure: u,
                channel: d,
                type: h,
                useSlate: m,
                spellcheckEnabled: p,
                useNewSlashCommands: f,
                canOnlyUseTextCommands: g,
                className: _,
                id: A,
                required: C,
                maxCharacterCount: v,
                allowNewLines: y,
                "aria-describedby": N,
                "aria-labelledby": j,
                accessibilityLabel: w,
                showValueWhenDisabled: L,
            } = this.props,
            { submitting: M, popup: k } = this.state,
            O = {
                channel: d,
                className: r()(_, R.Tg, { [R.w5]: m, [R.Rr]: n || M }),
                id: A,
                placeholder: this.getPlaceholder(),
                required: C,
                accessibilityLabel: w,
                disabled: n || !1,
                submitting: M,
                isEdit: h === E.oU.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: y,
                onChange: l,
                onResize: a,
                onKeyDown: s,
                onSubmit: o,
                textAreaPaddingClassName: r()({
                    [R.H$]: h === E.oU.CREATE_FORUM_POST,
                    [R.g_]: h === E.oU.CUSTOM_GIFT,
                    [R.Yg]: h === E.oU.USER_PROFILE,
                    [R.$$]: h === E.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: p,
                useNewSlashCommands: f,
                disableAutoFocus: c.Fr || (h.disableAutoFocus ?? !1),
                disableEnterToSubmit: h.submit?.disableEnterToSubmit ?? !1,
                "aria-controls": k.id ?? void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== k.id || void 0,
                "aria-activedescendant": k.activeDescendant ?? void 0,
                "aria-invalid": e.length > v,
                "aria-describedby": N,
                "aria-labelledby": j,
                "aria-autocomplete": "list",
            },
            P = m
                ? (0, i.jsx)(b.A, {
                      ref: this.ref,
                      ...O,
                      type: h,
                      value: n && !L ? (0, I.x7)("") : t,
                      canUseCommands: h.commands?.enabled,
                      canOnlyUseTextCommands: g,
                      onSubmitFailure: u,
                  })
                : (0, i.jsx)(S.A, { ref: this.ref, ...O, value: n && !L ? "" : e });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.EG, { event: T.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, i.jsx)(x.EG, { event: T.jej.CLEAR_TEXT, handler: this.handleClearText }),
                P,
            ],
        });
    }
    handleSaveCurrentText = (e) => {
        u.A.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
    };
    handleClearText = () => {
        this.props.onChange?.(null, "", (0, I.x7)(""));
    };
    handleInsertText = (e) => {
        let { plainText: t, rawText: n, addSpace: i = !1 } = e;
        this.props.disabled || (this.appendText(t, n, i), this.focus());
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
                canPasteFiles: i,
                uploadPromptCharacterCount: l,
                promptToUpload: s,
                maxCharacterCount: r,
                type: a,
            } = this.props,
            o = null != t ? (0, y.VG)(t) : null,
            c = (0, y.W7)(),
            u = (0, y.qH)(t, this._getEditorWindow()) ? n : (o ?? c ?? n);
        if (null == s || (!u.isPrivate() && !i) || (u.isPrivate() && u.isManaged())) return !1;
        let { files: g, errors: x } = (function (e, t) {
            let n = [],
                i = [],
                l = null,
                s = null,
                r = [];
            for (let t of e.items)
                if ("file" === t.kind) {
                    let e = t.webkitGetAsEntry?.() ?? t.getAsEntry?.() ?? null;
                    if (null != e && !1 === e.isFile) {
                        r.push({ item: t, error: "is_directory" });
                        continue;
                    }
                    let l = t.getAsFile();
                    if (null == l) continue;
                    null != l.path && l.path.length > 0 ? n.push(l) : i.push(l);
                } else
                    "string" === t.kind &&
                        ("text/plain" === t.type && null == l
                            ? (l = t)
                            : "text/html" === t.type && null == s && (s = t));
            if (n.length > 0) return { files: n, errors: r };
            if (i.length > 0) {
                if (1 === i.length && "image/png" === i[0].type && null != s) {
                    let t = i[0],
                        n =
                            (function (e) {
                                let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
                                if (null != t) {
                                    let e;
                                    try {
                                        let { pathname: n } = new URL(t.src);
                                        null != n && n.length > 0 && (e = (0, C.kh)(n));
                                    } catch {}
                                    if (null != e && e.length > 0) return `${e}.png`;
                                }
                            })(e.getData(s.type)) ?? t.name;
                    return { files: [(0, A.VE)(t, n, t.type)], errors: r };
                }
                return { files: i, errors: r };
            }
            if (null != l && null != t) {
                let n = e.getData(l.type);
                if (n.length > t) {
                    let e = new Blob([n], { type: "text/plain" });
                    return { files: [(0, A.VE)(e, "message.txt", "text/plain")], convertedStringToFile: !0, errors: r };
                }
            }
            return { files: [], errors: r };
        })(e.clipboardData, a.uploadLongMessages ? (l ?? r) : null);
        return (w(
            "onPaste",
            [...e.clipboardData.items].map((e) => {
                if ("file" !== e.kind) return { kind: e.kind, type: e.type };
                {
                    let t = e.getAsFile();
                    return { kind: e.kind, type: e.type, name: t?.name, path: t?.path };
                }
            }),
        ),
        0 === g.length)
            ? (x?.some((e) => {
                  let { error: t } = e;
                  return "is_directory" === t;
              }) && (0, h.openUploadError)({ title: j.intl.string(j.t.azO1Pe), help: j.intl.string(j.t["Koklr/"]) }),
              !1)
            : (e.preventDefault(),
              e.stopPropagation(),
              this.saveCurrentText(),
              ((e) => {
                  let t = f.A.getActiveCommand(u.id);
                  if (null == t) return s(e, u, a.drafts.type, { requireConfirm: !0, origin: "clipboard" });
                  let n = a.drafts.commandType ?? a.drafts.type,
                      i = null,
                      l = f.A.getActiveOption(u.id);
                  null !=
                      (i =
                          l?.type === m.n4.ATTACHMENT
                              ? l
                              : t.options?.find((e) => {
                                    if (e.type === m.n4.ATTACHMENT) return null == _.A.getUpload(u.id, e.name, n);
                                })) &&
                      d.A.setFile({
                          channelId: u.id,
                          id: i.name,
                          draftType: n,
                          file: { id: i.name, platform: p.xz.WEB, file: e[0] },
                      });
              })(g),
              this.focus(),
              !0);
    };
}
