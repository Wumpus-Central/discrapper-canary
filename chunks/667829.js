n.d(t, { Z: () => U }), n(388685), n(539854), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(729594),
    u = n(873546),
    d = n(430742),
    f = n(166459),
    p = n(531643),
    _ = n(911969),
    m = n(476326),
    h = n(998698),
    g = n(710845),
    E = n(117530),
    b = n(459273),
    y = n(403182),
    O = n(137058),
    v = n(541716),
    S = n(752305),
    I = n(30465),
    T = n(330122),
    C = n(140963),
    A = n(4484),
    N = n(925994),
    P = n(981631),
    R = n(388032),
    D = n(564355);
function w(e, t, n) {
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
function x(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
new g.Z("ChannelEditor.tsx");
let M = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    },
    k = 1000;
class U extends i.Component {
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
            (this._initTimeoutId = setTimeout(() => void this._getEditorWindow(), k));
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            var t, n;
            let e;
            (e = this.props.useSlate ? this.props.textValue : (0, N.sk)(this.props.richValue, { mode: "plain" })),
                null == (t = (n = this.props).onChange) || t.call(n, null, e, (0, S.JM)(e));
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
            d.Z.saveDraft(e.id, "", t.drafts.type);
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
        return null != (t = null == n || null == (e = n.getCurrentCommandOption) ? void 0 : e.call(n)) ? t : null;
    }
    getCurrentCommandOptionValue() {
        var e, t;
        let n = this.ref.current;
        return null != (t = null == n || null == (e = n.getCurrentCommandOptionValue) ? void 0 : e.call(n)) ? t : [];
    }
    getCommandOptionValues() {
        var e, t;
        let n = this.ref.current;
        return null != (t = null == n || null == (e = n.getCommandOptionValues) ? void 0 : e.call(n)) ? t : {};
    }
    getFirstText() {
        var e;
        let t = this.ref.current;
        return null != (e = null == t ? void 0 : t.getFirstText()) ? e : null;
    }
    getSlateEditor() {
        var e, t;
        let n = this.ref.current;
        return null != (t = null == n || null == (e = n.getSlateEditor) ? void 0 : e.call(n)) ? t : null;
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
        var e, t, n, i, a, s;
        let {
                textValue: l,
                richValue: c,
                disabled: d,
                onChange: f,
                onKeyDown: p,
                onResize: _,
                onSubmit: m,
                onSubmitFailure: h,
                channel: g,
                type: E,
                useSlate: y,
                spellcheckEnabled: O,
                useNewSlashCommands: I,
                canOnlyUseTextCommands: T,
                className: N,
                id: R,
                required: w,
                maxCharacterCount: L,
                allowNewLines: M,
                isEditorIdle: k,
                currentAutocompleteType: U,
                "aria-describedby": G,
                "aria-labelledby": Z,
                accessibilityLabel: B,
                showValueWhenDisabled: F,
            } = this.props,
            { submitting: V, popup: H } = this.state,
            Y = {
                channel: g,
                className: o()(N, D.textArea, {
                    [D.textAreaSlate]: y,
                    [D.textAreaDisabled]: d || V,
                }),
                id: R,
                placeholder: this.getPlaceholder(),
                required: w,
                accessibilityLabel: B,
                disabled: d || !1,
                submitting: V,
                isEdit: E === v.Ie.EDIT,
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
                onSubmit: m,
                textAreaPaddingClassName: o()({
                    [D.textAreaForPostCreation]: E === v.Ie.CREATE_FORUM_POST,
                    [D.textAreaCustomGift]: E === v.Ie.CUSTOM_GIFT,
                    [D.textAreaForUserProfile]: E === v.Ie.USER_PROFILE,
                    [D.textAreaForOverlayInlineReply]: E === v.Ie.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: O,
                useNewSlashCommands: I,
                isEditorIdle: k,
                currentAutocompleteType: U,
                disableAutoFocus: u.tq || (null != (n = E.disableAutoFocus) && n),
                disableEnterToSubmit: null != (i = null == (e = E.submit) ? void 0 : e.disableEnterToSubmit) && i,
                "aria-controls": null != (a = H.id) ? a : void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== H.id || void 0,
                "aria-activedescendant": null != (s = H.activeDescendant) ? s : void 0,
                "aria-invalid": l.length > L,
                "aria-describedby": G,
                "aria-labelledby": Z,
                "aria-autocomplete": "list",
            },
            W = y
                ? (0, r.jsx)(
                      A.Z,
                      j(x({ ref: this.ref }, Y), {
                          type: E,
                          value: d && !F ? (0, S.JM)("") : c,
                          canUseCommands: null == (t = E.commands) ? void 0 : t.enabled,
                          canOnlyUseTextCommands: T,
                          onSubmitFailure: h,
                      }),
                  )
                : (0, r.jsx)(C.Z, j(x({ ref: this.ref }, Y), { value: d && !F ? "" : l }));
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(b.d9, {
                    event: P.CkL.INSERT_TEXT,
                    handler: this.handleInsertText,
                }),
                (0, r.jsx)(b.d9, {
                    event: P.CkL.CLEAR_TEXT,
                    handler: this.handleClearText,
                }),
                W,
            ],
        });
    }
    constructor(e) {
        var t;
        super(e),
            (t = this),
            w(this, "ref", i.createRef()),
            w(this, "_focusBlurQueue", Promise.resolve()),
            w(this, "_unsubscribe", void 0),
            w(this, "_initTimeoutId", null),
            w(this, "_cachedEditorWindow", null),
            w(this, "handleSelectionChange", () => {
                if (this.props.focused) {
                    var e, t, n;
                    this.props.onSelectionChanged(
                        null == (t = (n = document).getSelection) || null == (e = t.call(n)) ? void 0 : e.toString(),
                    );
                }
            }),
            w(this, "focus", () => {
                var e;
                null == (e = this._focusBlurQueue) ||
                    e.then(() => {
                        this.setState({ focused: !0 }, () => {
                            let e = this.ref.current;
                            null != e && e.focus();
                        });
                    });
            }),
            w(this, "saveCurrentText", function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    { type: n, channel: r } = t.props;
                n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(r.id));
            }),
            w(this, "handleBeforeUnload", () => this.saveCurrentText()),
            w(this, "saveCurrentTextThrottled", l().throttle(this.saveCurrentText.bind(this, !1), 500)),
            w(this, "handleEnter", (e) => {
                var t, n;
                return null == (t = (n = this.props).onEnter) ? void 0 : t.call(n, e);
            }),
            w(this, "handleTab", () => {
                var e, t;
                return null == (e = (t = this.props).onTab) ? void 0 : e.call(t);
            }),
            w(this, "handleMoveSelection", (e) => {
                var t, n;
                return null == (t = (n = this.props).onMoveSelection) ? void 0 : t.call(n, e);
            }),
            w(this, "maybeShowAutocomplete", () => {
                var e, t;
                return null == (e = (t = this.props).onMaybeShowAutocomplete) ? void 0 : e.call(t);
            }),
            w(this, "hideAutocomplete", () => {
                var e, t;
                return null == (e = (t = this.props).onHideAutocomplete) ? void 0 : e.call(t);
            }),
            w(this, "handleSaveCurrentText", (e) => {
                d.Z.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
            }),
            w(this, "handleClearText", () => {
                var e, t;
                null == (e = (t = this.props).onChange) || e.call(t, null, "", (0, S.JM)(""));
            }),
            w(this, "handleInsertText", (e) => {
                let { plainText: t, rawText: n, addSpace: r = !1 } = e;
                this.props.disabled || (this.appendText(t, n, r), this.focus());
            }),
            w(this, "handleFocus", (e) => {
                let { onFocus: t } = this.props,
                    { focused: n } = this.state;
                null == t || t(e), n || this.setState({ focused: !0 });
            }),
            w(this, "handleBlur", (e) => {
                let { onBlur: t } = this.props,
                    { focused: n } = this.state;
                null == t || t(e), n && this.setState({ focused: !1 });
            }),
            w(this, "handlePaste", (e) => {
                var t, n, r;
                let i = null == (n = e.target) || null == (t = n.ownerDocument) ? void 0 : t.defaultView,
                    {
                        channel: a,
                        canPasteFiles: o,
                        uploadPromptCharacterCount: s,
                        promptToUpload: l,
                        maxCharacterCount: c,
                        type: u,
                    } = this.props,
                    d = null != i ? (0, T.im)(i) : null,
                    g = (0, T.Mo)(),
                    b = null != (r = null != d ? d : g) ? r : a,
                    y = (0, T._K)(i, this._getEditorWindow()) ? a : b;
                if (null == l || (!y.isPrivate() && !o) || (y.isPrivate() && y.isManaged())) return !1;
                let O = (e, t) => {
                        var n, r;
                        let i = h.Z.getActiveCommand(y.id);
                        if (null == i)
                            return l(e, y, u.drafts.type, {
                                requireConfirm: !0,
                                showLargeMessageDialog: t,
                                origin: "clipboard",
                            });
                        let a = null != (n = u.drafts.commandType) ? n : u.drafts.type,
                            o = null,
                            s = h.Z.getActiveOption(y.id);
                        null !=
                            (o =
                                (null == s ? void 0 : s.type) === _.jw.ATTACHMENT
                                    ? s
                                    : null == (r = i.options)
                                      ? void 0
                                      : r.find((e) => {
                                            if (e.type === _.jw.ATTACHMENT)
                                                return null == E.Z.getUpload(y.id, e.name, a);
                                        })) &&
                            f.Z.setFile({
                                channelId: y.id,
                                id: o.name,
                                draftType: a,
                                file: {
                                    id: o.name,
                                    platform: m.ow.WEB,
                                    file: e[0],
                                },
                            });
                    },
                    v = null != s ? s : c,
                    { files: S, errors: I } = G(e.clipboardData, u.uploadLongMessages ? v : null);
                return (M(
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
                0 === S.length)
                    ? ((null == I
                          ? void 0
                          : I.some((e) => {
                                let { error: t } = e;
                                return "is_directory" === t;
                            })) &&
                          (0, p.openUploadError)({
                              title: R.intl.string(R.t.azO1Pe),
                              help: R.intl.string(R.t["Koklr/"]),
                          }),
                      !1)
                    : (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), O(S), this.focus(), !0);
            }),
            (this._unsubscribe = I.p8.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = {
                focused: !1,
                submitting: !1,
                popup: I.p8.getState(),
            });
    }
}
function G(e, t) {
    var n, r, i, a, o;
    let s = [],
        l = [],
        c = null,
        u = null,
        d = [];
    for (let t of e.items)
        if ("file" === t.kind) {
            let e =
                null !=
                (a =
                    null != (i = null == (n = t.webkitGetAsEntry) ? void 0 : n.call(t))
                        ? i
                        : null == (r = t.getAsEntry)
                          ? void 0
                          : r.call(t))
                    ? a
                    : null;
            if (null != e && !1 === e.isFile) {
                d.push({
                    item: t,
                    error: "is_directory",
                });
                continue;
            }
            let o = t.getAsFile();
            if (null == o) continue;
            null != o.path && o.path.length > 0 ? s.push(o) : l.push(o);
        } else
            "string" === t.kind &&
                ("text/plain" === t.type && null == c ? (c = t) : "text/html" === t.type && null == u && (u = t));
    if (s.length > 0)
        return {
            files: s,
            errors: d,
        };
    if (l.length > 0) {
        if (1 === l.length && "image/png" === l[0].type && null != u) {
            let t = l[0],
                n = null != (o = Z(e.getData(u.type))) ? o : t.name;
            return {
                files: [(0, y.dp)(t, n, t.type)],
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
                files: [(0, y.dp)(e, "message.txt", "text/plain")],
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
function Z(e) {
    let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
    if (null != t) {
        let e;
        try {
            let { pathname: n } = c.parse(t.src);
            null != n && n.length > 0 && (e = (0, O.eP)(n).split(".")[0]);
        } catch (e) {}
        if (null != e && e.length > 0) return "".concat(e, ".png");
    }
}
