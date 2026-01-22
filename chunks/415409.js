n.d(t, { A: () => k }), n(896048), n(321073), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(607399),
    u = n(465532),
    d = n(608299),
    f = n(23658),
    p = n(155718),
    _ = n(565150),
    h = n(861382),
    m = n(626584),
    g = n(522602),
    E = n(234320),
    b = n(453771),
    y = n(741394),
    O = n(355622),
    A = n(408018),
    v = n(579940),
    S = n(177686),
    I = n(133684),
    T = n(827977),
    C = n(323350),
    N = n(652215),
    R = n(985018),
    w = n(111314);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
new m.A("ChannelEditor.tsx");
let j = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    },
    M = 1000;
class k extends i.Component {
    _getEditorWindow() {
        var e, t, n, r, i;
        let a =
            null == (i = this.ref) ||
            null == (r = i.current) ||
            null == (n = r.getSlateEditor) ||
            null == (t = n.call(r)) ||
            null == (e = t.windowContext)
                ? void 0
                : e.renderWindow;
        if (null == this._cachedEditorWindow || this._cachedEditorWindow !== a) {
            if (null != this._cachedEditorWindow && null == a) return null;
            this._cachedEditorWindow = null != a ? a : window;
        }
        return this._cachedEditorWindow;
    }
    componentDidMount() {
        this.props.focused && requestAnimationFrame(() => this.focus()),
            document.addEventListener("selectionchange", this.handleSelectionChange),
            window.addEventListener("beforeunload", this.handleBeforeUnload),
            (this._initTimeoutId = setTimeout(() => void this._getEditorWindow(), M));
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            var t, n;
            let e;
            (e = this.props.useSlate ? this.props.textValue : (0, C.WO)(this.props.richValue, { mode: "plain" })),
                null == (t = (n = this.props).onChange) || t.call(n, null, e, (0, A.x7)(e));
        } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled();
    }
    componentWillUnmount() {
        var e, t;
        this.saveCurrentText(),
            null == (e = (t = this)._unsubscribe) || e.call(t),
            window.removeEventListener("beforeunload", this.handleBeforeUnload),
            document.removeEventListener("selectionchange", this.handleSelectionChange),
            (this._focusBlurQueue = null),
            (this._unsubscribe = null),
            (this._cachedEditorWindow = null),
            null != this._initTimeoutId && clearTimeout(this._initTimeoutId);
    }
    blur() {
        let e = this.ref.current;
        null != e && e.blur();
    }
    submit(e) {
        var t;
        null == (t = this.ref.current) || t.submit(e);
    }
    insertEmoji(e) {
        let { emoji: t, willClose: n } = e,
            r = this.ref.current;
        null != t &&
            null != r &&
            (r.insertEmoji({
                emoji: t,
                addSpace: n,
            }),
            n && this.focus());
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
            n.insertText("<sound:".concat(e.guildId, ":").concat(e.soundId, ">"), void 0, !0));
    }
    handleOuterClick() {
        this.focus();
    }
    clearValue() {
        let { channel: e, type: t } = this.props;
        this.setState({
            focused: !0,
            submitting: !1,
        }),
            u.A.saveDraft(e.id, "", t.drafts.type);
    }
    getCurrentWord() {
        var e;
        let t = this.ref.current;
        return null != (e = null == t ? void 0 : t.getCurrentWord())
            ? e
            : {
                  word: null,
                  isAtStart: !1,
              };
    }
    insertAutocomplete(e, t, n) {
        let r = this.ref.current;
        return null == r ? void 0 : r.insertAutocomplete(e, t, n);
    }
    insertInlineAutocompleteElement(e) {
        let t = this.ref.current;
        return null == t ? void 0 : t.insertInlineAutocompleteInput(e);
    }
    replaceInlineAutocompleteInput(e, t, n) {
        let r = this.ref.current;
        return null == r ? void 0 : r.replaceInlineAutocompleteInput(e, t, n);
    }
    getCurrentCommandOption() {
        var e, t;
        let n = this.ref.current;
        return null != (e = null == n || null == (t = n.getCurrentCommandOption) ? void 0 : t.call(n)) ? e : null;
    }
    getCurrentCommandOptionValue() {
        var e, t;
        let n = this.ref.current;
        return null != (e = null == n || null == (t = n.getCurrentCommandOptionValue) ? void 0 : t.call(n)) ? e : [];
    }
    getCommandOptionValues() {
        var e, t;
        let n = this.ref.current;
        return null != (e = null == n || null == (t = n.getCommandOptionValues) ? void 0 : t.call(n)) ? e : {};
    }
    getFirstText() {
        var e;
        let t = this.ref.current;
        return null != (e = null == t ? void 0 : t.getFirstText()) ? e : null;
    }
    getSlateEditor() {
        var e, t;
        let n = this.ref.current;
        return null != (e = null == n || null == (t = n.getSlateEditor) ? void 0 : t.call(n)) ? e : null;
    }
    fixFocus(e) {
        e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus();
    }
    appendText(e, t) {
        var n;
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        null == (n = this.ref.current) || n.insertText(e, t, r);
    }
    getPlaceholder() {
        let { disabled: e, placeholder: t, isPreviewing: n, showValueWhenDisabled: r } = this.props;
        return e && !n ? (r ? "" : R.intl.string(R.t.IYKTTc)) : t;
    }
    render() {
        var e, t, n, i, a, o;
        let {
                textValue: l,
                richValue: u,
                disabled: d,
                onChange: f,
                onKeyDown: p,
                onResize: _,
                onSubmit: h,
                onSubmitFailure: m,
                channel: g,
                type: b,
                useSlate: y,
                spellcheckEnabled: v,
                useNewSlashCommands: S,
                canOnlyUseTextCommands: C,
                className: R,
                id: P,
                required: x,
                maxCharacterCount: j,
                allowNewLines: M,
                isEditorIdle: k,
                currentAutocompleteType: U,
                "aria-describedby": G,
                "aria-labelledby": V,
                accessibilityLabel: F,
                showValueWhenDisabled: B,
            } = this.props,
            { submitting: H, popup: Y } = this.state,
            W = {
                channel: g,
                className: s()(R, w.Tg, {
                    [w.w5]: y,
                    [w.Rr]: d || H,
                }),
                id: P,
                placeholder: this.getPlaceholder(),
                required: x,
                accessibilityLabel: F,
                disabled: d || !1,
                submitting: H,
                isEdit: b === O.oU.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: M,
                onChange: f,
                onResize: _,
                onKeyDown: p,
                onSubmit: h,
                textAreaPaddingClassName: s()({
                    [w.H$]: b === O.oU.CREATE_FORUM_POST,
                    [w.g_]: b === O.oU.CUSTOM_GIFT,
                    [w.Yg]: b === O.oU.USER_PROFILE,
                    [w.$$]: b === O.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: v,
                useNewSlashCommands: S,
                isEditorIdle: k,
                currentAutocompleteType: U,
                disableAutoFocus: c.Fr || (null != (e = b.disableAutoFocus) && e),
                disableEnterToSubmit: null != (t = null == (a = b.submit) ? void 0 : a.disableEnterToSubmit) && t,
                "aria-controls": null != (n = Y.id) ? n : void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== Y.id || void 0,
                "aria-activedescendant": null != (i = Y.activeDescendant) ? i : void 0,
                "aria-invalid": l.length > j,
                "aria-describedby": G,
                "aria-labelledby": V,
                "aria-autocomplete": "list",
            },
            K = y
                ? (0, r.jsx)(
                      T.A,
                      L(D({ ref: this.ref }, W), {
                          type: b,
                          value: d && !B ? (0, A.x7)("") : u,
                          canUseCommands: null == (o = b.commands) ? void 0 : o.enabled,
                          canOnlyUseTextCommands: C,
                          onSubmitFailure: m,
                      }),
                  )
                : (0, r.jsx)(I.A, L(D({ ref: this.ref }, W), { value: d && !B ? "" : l }));
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(E.EG, {
                    event: N.jej.INSERT_TEXT,
                    handler: this.handleInsertText,
                }),
                (0, r.jsx)(E.EG, {
                    event: N.jej.CLEAR_TEXT,
                    handler: this.handleClearText,
                }),
                K,
            ],
        });
    }
    constructor(e) {
        var t;
        super(e),
            (t = this),
            P(this, "ref", i.createRef()),
            P(this, "_focusBlurQueue", Promise.resolve()),
            P(this, "_unsubscribe", void 0),
            P(this, "_initTimeoutId", null),
            P(this, "_cachedEditorWindow", null),
            P(this, "handleSelectionChange", () => {
                if (this.props.focused) {
                    var e, t, n;
                    this.props.onSelectionChanged(
                        null == (t = (n = document).getSelection) || null == (e = t.call(n)) ? void 0 : e.toString(),
                    );
                }
            }),
            P(this, "focus", () => {
                var e;
                null == (e = this._focusBlurQueue) ||
                    e.then(() => {
                        this.setState({ focused: !0 }, () => {
                            let e = this.ref.current;
                            null != e && e.focus();
                        });
                    });
            }),
            P(this, "saveCurrentText", function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    { type: n, channel: r } = t.props;
                n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(r.id));
            }),
            P(this, "handleBeforeUnload", () => this.saveCurrentText()),
            P(this, "saveCurrentTextThrottled", l().throttle(this.saveCurrentText.bind(this, !1), 500)),
            P(this, "handleEnter", (e) => {
                var t, n;
                return null == (t = (n = this.props).onEnter) ? void 0 : t.call(n, e);
            }),
            P(this, "handleTab", () => {
                var e, t;
                return null == (e = (t = this.props).onTab) ? void 0 : e.call(t);
            }),
            P(this, "handleMoveSelection", (e) => {
                var t, n;
                return null == (t = (n = this.props).onMoveSelection) ? void 0 : t.call(n, e);
            }),
            P(this, "maybeShowAutocomplete", () => {
                var e, t;
                return null == (e = (t = this.props).onMaybeShowAutocomplete) ? void 0 : e.call(t);
            }),
            P(this, "hideAutocomplete", () => {
                var e, t;
                return null == (e = (t = this.props).onHideAutocomplete) ? void 0 : e.call(t);
            }),
            P(this, "handleSaveCurrentText", (e) => {
                u.A.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
            }),
            P(this, "handleClearText", () => {
                var e, t;
                null == (e = (t = this.props).onChange) || e.call(t, null, "", (0, A.x7)(""));
            }),
            P(this, "handleInsertText", (e) => {
                let { plainText: t, rawText: n, addSpace: r = !1 } = e;
                this.props.disabled || (this.appendText(t, n, r), this.focus());
            }),
            P(this, "handleFocus", (e) => {
                let { onFocus: t } = this.props,
                    { focused: n } = this.state;
                null == t || t(e), n || this.setState({ focused: !0 });
            }),
            P(this, "handleBlur", (e) => {
                let { onBlur: t } = this.props,
                    { focused: n } = this.state;
                null == t || t(e), n && this.setState({ focused: !1 });
            }),
            P(this, "handlePaste", (e) => {
                var t, n, r;
                let i = null == (r = e.target) || null == (n = r.ownerDocument) ? void 0 : n.defaultView,
                    {
                        channel: a,
                        canPasteFiles: s,
                        uploadPromptCharacterCount: o,
                        promptToUpload: l,
                        maxCharacterCount: c,
                        type: u,
                    } = this.props,
                    m = null != i ? (0, S.VG)(i) : null,
                    E = (0, S.W7)(),
                    b = null != (t = null != m ? m : E) ? t : a,
                    y = (0, S.qH)(i, this._getEditorWindow()) ? a : b;
                if (null == l || (!y.isPrivate() && !s) || (y.isPrivate() && y.isManaged())) return !1;
                let O = (e) => {
                        var t, n;
                        let r = h.A.getActiveCommand(y.id);
                        if (null == r)
                            return l(e, y, u.drafts.type, {
                                requireConfirm: !0,
                                origin: "clipboard",
                            });
                        let i = null != (t = u.drafts.commandType) ? t : u.drafts.type,
                            a = null,
                            s = h.A.getActiveOption(y.id);
                        null !=
                            (a =
                                (null == s ? void 0 : s.type) === p.n4.ATTACHMENT
                                    ? s
                                    : null == (n = r.options)
                                      ? void 0
                                      : n.find((e) => {
                                            if (e.type === p.n4.ATTACHMENT)
                                                return null == g.A.getUpload(y.id, e.name, i);
                                        })) &&
                            d.A.setFile({
                                channelId: y.id,
                                id: a.name,
                                draftType: i,
                                file: {
                                    id: a.name,
                                    platform: _.xz.WEB,
                                    file: e[0],
                                },
                            });
                    },
                    A = null != o ? o : c,
                    { files: v, errors: I } = U(e.clipboardData, u.uploadLongMessages ? A : null);
                return (j(
                    "onPaste",
                    [...e.clipboardData.items].map((e) => {
                        if ("file" !== e.kind)
                            return {
                                kind: e.kind,
                                type: e.type,
                            };
                        {
                            let t = e.getAsFile();
                            return {
                                kind: e.kind,
                                type: e.type,
                                name: null == t ? void 0 : t.name,
                                path: null == t ? void 0 : t.path,
                            };
                        }
                    }),
                ),
                0 === v.length)
                    ? ((null == I
                          ? void 0
                          : I.some((e) => {
                                let { error: t } = e;
                                return "is_directory" === t;
                            })) &&
                          (0, f.openUploadError)({
                              title: R.intl.string(R.t.azO1Pe),
                              help: R.intl.string(R.t["Koklr/"]),
                          }),
                      !1)
                    : (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), O(v), this.focus(), !0);
            }),
            (this._unsubscribe = v.Y0.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = {
                focused: !1,
                submitting: !1,
                popup: v.Y0.getState(),
            });
    }
}
function U(e, t) {
    var n, r, i, a, s;
    let o = [],
        l = [],
        c = null,
        u = null,
        d = [];
    for (let t of e.items)
        if ("file" === t.kind) {
            let e =
                null !=
                (n =
                    null != (r = null == (i = t.webkitGetAsEntry) ? void 0 : i.call(t))
                        ? r
                        : null == (a = t.getAsEntry)
                          ? void 0
                          : a.call(t))
                    ? n
                    : null;
            if (null != e && !1 === e.isFile) {
                d.push({
                    item: t,
                    error: "is_directory",
                });
                continue;
            }
            let s = t.getAsFile();
            if (null == s) continue;
            null != s.path && s.path.length > 0 ? o.push(s) : l.push(s);
        } else
            "string" === t.kind &&
                ("text/plain" === t.type && null == c ? (c = t) : "text/html" === t.type && null == u && (u = t));
    if (o.length > 0)
        return {
            files: o,
            errors: d,
        };
    if (l.length > 0) {
        if (1 === l.length && "image/png" === l[0].type && null != u) {
            let t = l[0],
                n = null != (s = G(e.getData(u.type))) ? s : t.name;
            return {
                files: [(0, b.VE)(t, n, t.type)],
                errors: d,
            };
        }
        return {
            files: l,
            errors: d,
        };
    }
    if (null != c && null != t) {
        let n = e.getData(c.type);
        if (n.length > t) {
            let e = new Blob([n], { type: "text/plain" });
            return {
                files: [(0, b.VE)(e, "message.txt", "text/plain")],
                convertedStringToFile: !0,
                errors: d,
            };
        }
    }
    return {
        files: [],
        errors: d,
    };
}
function G(e) {
    let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
    if (null != t) {
        let e;
        try {
            let { pathname: n } = new URL(t.src);
            null != n && n.length > 0 && (e = (0, y.kh)(n));
        } catch (e) {}
        if (null != e && e.length > 0) return "".concat(e, ".png");
    }
}
