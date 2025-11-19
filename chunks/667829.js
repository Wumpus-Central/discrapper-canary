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
    _ = n(531643),
    p = n(911969),
    h = n(476326),
    m = n(998698),
    g = n(710845),
    E = n(117530),
    b = n(459273),
    y = n(403182),
    O = n(137058),
    v = n(541716),
    I = n(752305),
    T = n(30465),
    S = n(330122),
    A = n(140963),
    C = n(4484),
    N = n(925994),
    R = n(981631),
    P = n(388032),
    D = n(744114);
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
function L(e) {
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
function M(e, t) {
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
new g.Z("ChannelEditor.tsx");
let j = function () {
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
                null == (t = (n = this.props).onChange) || t.call(n, null, e, (0, I.JM)(e));
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
        return e && !n ? (r ? "" : P.intl.string(P.t.IYKTTc)) : t;
    }
    render() {
        var e, t, n, i, a, s;
        let {
                textValue: l,
                richValue: c,
                disabled: d,
                onChange: f,
                onKeyDown: _,
                onResize: p,
                onSubmit: h,
                channel: m,
                type: g,
                useSlate: E,
                spellcheckEnabled: y,
                useNewSlashCommands: O,
                canOnlyUseTextCommands: T,
                className: S,
                id: N,
                required: P,
                maxCharacterCount: w,
                allowNewLines: x,
                isEditorIdle: j,
                currentAutocompleteType: k,
                "aria-describedby": U,
                "aria-labelledby": G,
                accessibilityLabel: B,
                showValueWhenDisabled: Z,
            } = this.props,
            { submitting: F, popup: V } = this.state,
            H = {
                channel: m,
                className: o()(S, D.textArea, {
                    [D.textAreaSlate]: E,
                    [D.textAreaDisabled]: d || F,
                }),
                id: N,
                placeholder: this.getPlaceholder(),
                required: P,
                accessibilityLabel: B,
                disabled: d || !1,
                submitting: F,
                isEdit: g === v.Ie.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: x,
                onChange: f,
                onResize: p,
                onKeyDown: _,
                onSubmit: h,
                textAreaPaddingClassName: o()({
                    [D.textAreaForPostCreation]: g === v.Ie.CREATE_FORUM_POST,
                    [D.textAreaCustomGift]: g === v.Ie.CUSTOM_GIFT,
                    [D.textAreaForUserProfile]: g === v.Ie.USER_PROFILE,
                    [D.textAreaForOverlayInlineReply]: g === v.Ie.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: y,
                useNewSlashCommands: O,
                isEditorIdle: j,
                currentAutocompleteType: k,
                disableAutoFocus: u.tq || (null != (n = g.disableAutoFocus) && n),
                disableEnterToSubmit: null != (i = null == (e = g.submit) ? void 0 : e.disableEnterToSubmit) && i,
                "aria-controls": null != (a = V.id) ? a : void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== V.id || void 0,
                "aria-activedescendant": null != (s = V.activeDescendant) ? s : void 0,
                "aria-invalid": l.length > w,
                "aria-describedby": U,
                "aria-labelledby": G,
                "aria-autocomplete": "list",
            },
            Y = E
                ? (0, r.jsx)(
                      C.Z,
                      M(L({ ref: this.ref }, H), {
                          type: g,
                          value: d && !Z ? (0, I.JM)("") : c,
                          canUseCommands: null == (t = g.commands) ? void 0 : t.enabled,
                          canOnlyUseTextCommands: T,
                      }),
                  )
                : (0, r.jsx)(A.Z, M(L({ ref: this.ref }, H), { value: d && !Z ? "" : l }));
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(b.d9, {
                    event: R.CkL.INSERT_TEXT,
                    handler: this.handleInsertText,
                }),
                (0, r.jsx)(b.d9, {
                    event: R.CkL.CLEAR_TEXT,
                    handler: this.handleClearText,
                }),
                Y,
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
                null == (e = (t = this.props).onChange) || e.call(t, null, "", (0, I.JM)(""));
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
                    d = null != i ? (0, S.im)(i) : null,
                    g = (0, S.Mo)(),
                    b = null != (r = null != d ? d : g) ? r : a,
                    y = (0, S._K)(i, this._getEditorWindow()) ? a : b;
                if (null == l || (!y.isPrivate() && !o) || (y.isPrivate() && y.isManaged())) return !1;
                let O = (e, t) => {
                        var n, r;
                        let i = m.Z.getActiveCommand(y.id);
                        if (null == i)
                            return l(e, y, u.drafts.type, {
                                requireConfirm: !0,
                                showLargeMessageDialog: t,
                                origin: "clipboard",
                            });
                        let a = null != (n = u.drafts.commandType) ? n : u.drafts.type,
                            o = null,
                            s = m.Z.getActiveOption(y.id);
                        null !=
                            (o =
                                (null == s ? void 0 : s.type) === p.jw.ATTACHMENT
                                    ? s
                                    : null == (r = i.options)
                                      ? void 0
                                      : r.find((e) => {
                                            if (e.type === p.jw.ATTACHMENT)
                                                return null == E.Z.getUpload(y.id, e.name, a);
                                        })) &&
                            f.Z.setFile({
                                channelId: y.id,
                                id: o.name,
                                draftType: a,
                                file: {
                                    id: o.name,
                                    platform: h.ow.WEB,
                                    file: e[0],
                                },
                            });
                    },
                    v = null != s ? s : c,
                    { files: I, errors: T } = G(e.clipboardData, u.uploadLongMessages ? v : null);
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
                0 === I.length)
                    ? ((null == T
                          ? void 0
                          : T.some((e) => {
                                let { error: t } = e;
                                return "is_directory" === t;
                            })) &&
                          (0, _.openUploadError)({
                              title: P.intl.string(P.t.azO1Pe),
                              help: P.intl.string(P.t["Koklr/"]),
                          }),
                      !1)
                    : (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), O(I), this.focus(), !0);
            }),
            (this._unsubscribe = T.p8.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = {
                focused: !1,
                submitting: !1,
                popup: T.p8.getState(),
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
                n = null != (o = B(e.getData(u.type))) ? o : t.name;
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
function B(e) {
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
