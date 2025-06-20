n.d(t, { Z: () => M }), n(388685), n(539854), n(35282);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(218887),
    u = n.n(c),
    d = n(729594),
    f = n(873546),
    _ = n(430742),
    p = n(166459),
    h = n(911969),
    m = n(476326),
    g = n(998698),
    E = n(710845),
    b = n(117530),
    y = n(459273),
    O = n(403182),
    v = n(541716),
    I = n(752305),
    T = n(30465),
    S = n(140963),
    A = n(4484),
    N = n(925994),
    C = n(981631),
    R = n(388032),
    P = n(302195);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function x(e, t) {
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
new E.Z('ChannelEditor.tsx');
let k = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class M extends i.Component {
    componentDidMount() {
        this.props.focused && requestAnimationFrame(() => this.focus()), document.addEventListener('selectionchange', this.handleSelectionChange), window.addEventListener('beforeunload', this.handleBeforeUnload);
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            var t, n;
            let e;
            (e = this.props.useSlate ? this.props.textValue : (0, N.sk)(this.props.richValue, { mode: 'plain' })), null == (t = (n = this.props).onChange) || t.call(n, null, e, (0, I.JM)(e));
        } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled();
    }
    componentWillUnmount() {
        var e, t;
        this.saveCurrentText(), null == (e = (t = this)._unsubscribe) || e.call(t), window.removeEventListener('beforeunload', this.handleBeforeUnload), document.removeEventListener('selectionchange', this.handleSelectionChange), (this._focusBlurQueue = null), (this._unsubscribe = null);
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
                addSpace: n
            }),
            n && this.focus());
    }
    insertGIF(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        null != e && null != n && (t.endsWith(' ') || n.insertText(' ', void 0, !1), n.insertText(e.url));
    }
    insertSound(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        null != e && null != n && (t.endsWith(' ') || n.insertText(' ', void 0, !1), n.insertText('<sound:'.concat(e.guildId, ':').concat(e.soundId, '>'), void 0, !0));
    }
    handleOuterClick() {
        this.focus();
    }
    clearValue() {
        let { channel: e, type: t } = this.props;
        this.setState({
            focused: !0,
            submitting: !1
        }),
            _.Z.saveDraft(e.id, '', t.drafts.type);
    }
    getCurrentWord() {
        var e;
        let t = this.ref.current;
        return null != (e = null == t ? void 0 : t.getCurrentWord())
            ? e
            : {
                  word: null,
                  isAtStart: !1
              };
    }
    insertAutocomplete(e, t, n) {
        let r = this.ref.current;
        return null == r ? void 0 : r.insertAutocomplete(e, t, n);
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
        let { disabled: e, placeholder: t, isPreviewing: n } = this.props;
        return e && !n ? R.intl.string(R.t.IYKTTU) : t;
    }
    render() {
        var e, t, n, i, a, s;
        let { textValue: l, richValue: c, disabled: u, onChange: d, onKeyDown: _, onResize: p, onSubmit: h, channel: m, type: g, useSlate: E, spellcheckEnabled: b, useNewSlashCommands: O, canOnlyUseTextCommands: T, className: N, id: R, required: w, maxCharacterCount: L, allowNewLines: k, 'aria-describedby': M, 'aria-labelledby': j, accessibilityLabel: U } = this.props,
            { submitting: G, popup: B } = this.state,
            V = {
                channel: m,
                className: o()(N, P.textArea, {
                    [P.textAreaSlate]: E,
                    [P.textAreaDisabled]: u || G
                }),
                id: R,
                placeholder: this.getPlaceholder(),
                required: w,
                accessibilityLabel: U,
                disabled: u || !1,
                submitting: G,
                isEdit: g === v.Ie.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: k,
                onChange: d,
                onResize: p,
                onKeyDown: _,
                onSubmit: h,
                textAreaPaddingClassName: o()({
                    [P.textAreaForPostCreation]: g === v.Ie.CREATE_FORUM_POST,
                    [P.textAreaCustomGift]: g === v.Ie.CUSTOM_GIFT,
                    [P.textAreaForUserProfile]: g === v.Ie.USER_PROFILE,
                    [P.textAreaForOverlayInlineReply]: g === v.Ie.OVERLAY_INLINE_REPLY
                }),
                spellcheckEnabled: b,
                useNewSlashCommands: O,
                disableAutoFocus: f.tq || (null != (n = g.disableAutoFocus) && n),
                disableEnterToSubmit: null != (i = null == (e = g.submit) ? void 0 : e.disableEnterToSubmit) && i,
                'aria-controls': null != (a = B.id) ? a : void 0,
                'aria-haspopup': 'listbox',
                'aria-expanded': null !== B.id || void 0,
                'aria-activedescendant': null != (s = B.activeDescendant) ? s : void 0,
                'aria-invalid': l.length > L,
                'aria-describedby': M,
                'aria-labelledby': j,
                'aria-autocomplete': 'list'
            },
            F = E
                ? (0, r.jsx)(
                      A.Z,
                      x(D({ ref: this.ref }, V), {
                          type: g,
                          value: u ? (0, I.JM)('') : c,
                          canUseCommands: null == (t = g.commands) ? void 0 : t.enabled,
                          canOnlyUseTextCommands: T
                      })
                  )
                : (0, r.jsx)(S.Z, x(D({ ref: this.ref }, V), { value: u ? '' : l }));
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.d9, {
                    event: C.CkL.INSERT_TEXT,
                    handler: this.handleInsertText
                }),
                (0, r.jsx)(y.d9, {
                    event: C.CkL.CLEAR_TEXT,
                    handler: this.handleClearText
                }),
                F
            ]
        });
    }
    constructor(e) {
        var t;
        super(e),
            (t = this),
            w(this, 'ref', i.createRef()),
            w(this, '_focusBlurQueue', Promise.resolve()),
            w(this, '_unsubscribe', void 0),
            w(this, 'handleSelectionChange', () => {
                if (this.props.focused) {
                    var e, t, n;
                    this.props.onSelectionChanged(null == (t = (n = document).getSelection) || null == (e = t.call(n)) ? void 0 : e.toString());
                }
            }),
            w(this, 'focus', () => {
                var e;
                null == (e = this._focusBlurQueue) ||
                    e.then(() => {
                        this.setState({ focused: !0 }, () => {
                            let e = this.ref.current;
                            null != e && e.focus();
                        });
                    });
            }),
            w(this, 'saveCurrentText', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    { type: n, channel: r } = t.props;
                n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(r.id));
            }),
            w(this, 'handleBeforeUnload', () => this.saveCurrentText()),
            w(this, 'saveCurrentTextThrottled', l().throttle(this.saveCurrentText.bind(this, !1), 500)),
            w(this, 'handleEnter', (e) => {
                var t, n;
                return null == (t = (n = this.props).onEnter) ? void 0 : t.call(n, e);
            }),
            w(this, 'handleTab', () => {
                var e, t;
                return null == (e = (t = this.props).onTab) ? void 0 : e.call(t);
            }),
            w(this, 'handleMoveSelection', (e) => {
                var t, n;
                return null == (t = (n = this.props).onMoveSelection) ? void 0 : t.call(n, e);
            }),
            w(this, 'maybeShowAutocomplete', () => {
                var e, t;
                return null == (e = (t = this.props).onMaybeShowAutocomplete) ? void 0 : e.call(t);
            }),
            w(this, 'hideAutocomplete', () => {
                var e, t;
                return null == (e = (t = this.props).onHideAutocomplete) ? void 0 : e.call(t);
            }),
            w(this, 'handleSaveCurrentText', (e) => {
                _.Z.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
            }),
            w(this, 'handleClearText', () => {
                var e, t;
                null == (e = (t = this.props).onChange) || e.call(t, null, '', (0, I.JM)(''));
            }),
            w(this, 'handleInsertText', (e) => {
                let { plainText: t, rawText: n, addSpace: r = !1 } = e;
                this.props.disabled || (this.appendText(t, n, r), this.focus());
            }),
            w(this, 'handleFocus', (e) => {
                let { onFocus: t } = this.props,
                    { focused: n } = this.state;
                null == t || t(e), n || this.setState({ focused: !0 });
            }),
            w(this, 'handleBlur', (e) => {
                let { onBlur: t } = this.props,
                    { focused: n } = this.state;
                null == t || t(e), n && this.setState({ focused: !1 });
            }),
            w(this, 'handlePaste', (e) => {
                let { channel: t, canPasteFiles: n, uploadPromptCharacterCount: r, promptToUpload: i, maxCharacterCount: a, type: o } = this.props;
                if (null == i || (!t.isPrivate() && !n) || (t.isPrivate() && t.isManaged())) return !1;
                let s = (e, n) => {
                        var r, a;
                        let s = g.Z.getActiveCommand(t.id);
                        if (null == s)
                            return i(e, t, o.drafts.type, {
                                requireConfirm: !0,
                                showLargeMessageDialog: n
                            });
                        let l = null != (r = o.drafts.commandType) ? r : o.drafts.type,
                            c = null,
                            u = g.Z.getActiveOption(t.id);
                        null !=
                            (c =
                                (null == u ? void 0 : u.type) === h.jw.ATTACHMENT
                                    ? u
                                    : null == (a = s.options)
                                      ? void 0
                                      : a.find((e) => {
                                            if (e.type === h.jw.ATTACHMENT) return null == b.Z.getUpload(t.id, e.name, l);
                                        })) &&
                            p.Z.setFile({
                                channelId: t.id,
                                id: c.name,
                                draftType: l,
                                file: {
                                    id: c.name,
                                    platform: m.ow.WEB,
                                    file: e[0]
                                }
                            });
                    },
                    l = null != r ? r : a,
                    { files: c } = j(e.clipboardData, o.uploadLongMessages ? l : null);
                return (
                    k(
                        'onPaste',
                        [...e.clipboardData.items].map((e) => {
                            if ('file' !== e.kind)
                                return {
                                    kind: e.kind,
                                    type: e.type
                                };
                            {
                                let t = e.getAsFile();
                                return {
                                    kind: e.kind,
                                    type: e.type,
                                    name: null == t ? void 0 : t.name,
                                    path: null == t ? void 0 : t.path
                                };
                            }
                        })
                    ),
                    0 !== c.length && (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), s(c), this.focus(), !0)
                );
            }),
            (this._unsubscribe = T.p8.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = {
                focused: !1,
                submitting: !1,
                popup: T.p8.getState()
            });
    }
}
function j(e, t) {
    let n = [],
        r = [],
        i = null,
        a = null;
    for (let t of e.items)
        if ('file' === t.kind) {
            let e = t.getAsFile();
            if (null == e) continue;
            null != e.path && e.path.length > 0 ? n.push(e) : r.push(e);
        } else 'string' === t.kind && ('text/plain' === t.type && null == i ? (i = t) : 'text/html' === t.type && null == a && (a = t));
    if (n.length > 0) return { files: n };
    if (r.length > 0) {
        if (1 === r.length && 'image/png' === r[0].type && null != a) {
            var o;
            let t = r[0],
                n = null != (o = U(e.getData(a.type))) ? o : t.name;
            return { files: [(0, O.dp)(t, n, t.type)] };
        }
        return { files: r };
    }
    if (null != i && null != t) {
        let n = e.getData(i.type);
        if (n.length > t) {
            let e = new Blob([n], { type: 'text/plain' });
            return {
                files: [(0, O.dp)(e, 'message.txt', 'text/plain')],
                convertedStringToFile: !0
            };
        }
    }
    return { files: [] };
}
function U(e) {
    let t = new DOMParser().parseFromString(e, 'text/html').querySelector('img');
    if (null != t) {
        let e;
        try {
            let { pathname: n } = d.parse(t.src);
            null != n && n.length > 0 && (e = u().basename(n).split('.')[0]);
        } catch (e) {}
        if (null != e && e.length > 0) return ''.concat(e, '.png');
    }
}
