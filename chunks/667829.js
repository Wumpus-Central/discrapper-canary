r.d(n, {
    Z: function () {
        return U;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(218887),
    _ = r.n(f),
    h = r(729594),
    p = r(873546),
    m = r(430742),
    g = r(166459),
    E = r(911969),
    v = r(476326),
    I = r(998698),
    T = r(710845),
    b = r(117530),
    y = r(459273),
    S = r(403182),
    A = r(541716),
    N = r(752305),
    C = r(30465),
    R = r(140963),
    O = r(4484),
    D = r(925994),
    L = r(981631),
    x = r(388032),
    w = r(553796);
function P(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
new T.Z('ChannelEditor.tsx');
let M = function () {
        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    },
    k = {
        12: w.fontSize12Padding,
        14: w.fontSize14Padding,
        15: w.fontSize15Padding,
        16: w.fontSize16Padding,
        18: w.fontSize18Padding,
        20: w.fontSize20Padding,
        24: w.fontSize24Padding
    };
class U extends o.Component {
    componentDidMount() {
        this.props.focused && requestAnimationFrame(() => this.focus()), document.addEventListener('selectionchange', this.handleSelectionChange), window.addEventListener('beforeunload', this.handleBeforeUnload);
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            var n, r;
            let e;
            (e = this.props.useSlate ? this.props.textValue : (0, D.sk)(this.props.richValue, { mode: 'plain' })), null === (n = (r = this.props).onChange) || void 0 === n || n.call(r, null, e, (0, N.JM)(e));
        } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled();
    }
    componentWillUnmount() {
        var e, n;
        this.saveCurrentText(), null === (e = (n = this)._unsubscribe) || void 0 === e || e.call(n), window.removeEventListener('beforeunload', this.handleBeforeUnload), document.removeEventListener('selectionchange', this.handleSelectionChange), (this._focusBlurQueue = null), (this._unsubscribe = null);
    }
    blur() {
        let e = this.ref.current;
        null != e && e.blur();
    }
    submit(e) {
        var n;
        null === (n = this.ref.current) || void 0 === n || n.submit(e);
    }
    insertEmoji(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { textValue: i } = this.props,
            a = this.ref.current;
        null != e && null != a && (r && !i.endsWith(' ') && a.insertText(' ', void 0, !1), a.insertEmoji(e, n), n && this.focus());
    }
    insertGIF(e) {
        let { textValue: n } = this.props,
            r = this.ref.current;
        null != e && null != r && (!n.endsWith(' ') && r.insertText(' ', void 0, !1), r.insertText(e.url));
    }
    insertSound(e) {
        let { textValue: n } = this.props,
            r = this.ref.current;
        null != e && null != r && (!n.endsWith(' ') && r.insertText(' ', void 0, !1), r.insertText('<sound:'.concat(e.guildId, ':').concat(e.soundId, '>'), void 0, !0));
    }
    handleOuterClick() {
        this.focus();
    }
    clearValue() {
        let { channel: e, type: n } = this.props;
        this.setState({
            focused: !0,
            submitting: !1
        }),
            m.Z.saveDraft(e.id, '', n.drafts.type);
    }
    getCurrentWord() {
        var e;
        let n = this.ref.current;
        return null !== (e = null == n ? void 0 : n.getCurrentWord()) && void 0 !== e
            ? e
            : {
                  word: null,
                  isAtStart: !1
              };
    }
    insertAutocomplete(e, n, r) {
        let i = this.ref.current;
        return null == i ? void 0 : i.insertAutocomplete(e, n, r);
    }
    getCurrentCommandOption() {
        var e, n;
        let r = this.ref.current;
        return null !== (n = null == r ? void 0 : null === (e = r.getCurrentCommandOption) || void 0 === e ? void 0 : e.call(r)) && void 0 !== n ? n : null;
    }
    getCurrentCommandOptionValue() {
        var e, n;
        let r = this.ref.current;
        return null !== (n = null == r ? void 0 : null === (e = r.getCurrentCommandOptionValue) || void 0 === e ? void 0 : e.call(r)) && void 0 !== n ? n : [];
    }
    getCommandOptionValues() {
        var e, n;
        let r = this.ref.current;
        return null !== (n = null == r ? void 0 : null === (e = r.getCommandOptionValues) || void 0 === e ? void 0 : e.call(r)) && void 0 !== n ? n : {};
    }
    getFirstText() {
        var e;
        let n = this.ref.current;
        return null !== (e = null == n ? void 0 : n.getFirstText()) && void 0 !== e ? e : null;
    }
    getSlateEditor() {
        var e, n;
        let r = this.ref.current;
        return null !== (n = null == r ? void 0 : null === (e = r.getSlateEditor) || void 0 === e ? void 0 : e.call(r)) && void 0 !== n ? n : null;
    }
    fixFocus(e) {
        e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus();
    }
    appendText(e, n) {
        var r;
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        null === (r = this.ref.current) || void 0 === r || r.insertText(e, n, i);
    }
    getPlaceholder() {
        let { disabled: e, placeholder: n, isPreviewing: r } = this.props;
        return e && !r ? x.intl.string(x.t.IYKTTU) : n;
    }
    render() {
        var e, n, r, i, a, o;
        let { textValue: l, richValue: c, disabled: d, onChange: f, onKeyDown: _, onResize: h, onSubmit: m, channel: g, type: E, fontSize: v, useSlate: I, spellcheckEnabled: T, useNewSlashCommands: b, canOnlyUseTextCommands: S, className: C, id: D, required: x, maxCharacterCount: P, allowNewLines: M, 'aria-describedby': U, 'aria-labelledby': B, accessibilityLabel: G } = this.props,
            { submitting: Z, popup: F } = this.state,
            V = {
                channel: g,
                className: u()(C, w.textArea, {
                    [w.textAreaSlate]: I,
                    [w.textAreaDisabled]: d || Z
                }),
                id: D,
                placeholder: this.getPlaceholder(),
                required: x,
                accessibilityLabel: G,
                disabled: d || !1,
                submitting: Z,
                isEdit: E === A.Ie.EDIT,
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
                onResize: h,
                onKeyDown: _,
                onSubmit: m,
                textAreaPaddingClassName: u()(k[v], {
                    [w.textAreaWithoutAttachmentButton]: E !== A.Ie.NORMAL && E !== A.Ie.OVERLAY && E !== A.Ie.THREAD_CREATION && E !== A.Ie.SIDEBAR,
                    [w.textAreaForPostCreation]: E === A.Ie.CREATE_FORUM_POST,
                    [w.textAreaCustomGift]: E === A.Ie.CUSTOM_GIFT,
                    [w.textAreaForUserProfile]: E === A.Ie.USER_PROFILE,
                    [w.textAreaForOverlayInlineReply]: E === A.Ie.OVERLAY_INLINE_REPLY
                }),
                spellcheckEnabled: T,
                useNewSlashCommands: b,
                disableAutoFocus: p.tq || (null !== (r = E.disableAutoFocus) && void 0 !== r && r),
                disableEnterToSubmit: null !== (i = null === (e = E.submit) || void 0 === e ? void 0 : e.disableEnterToSubmit) && void 0 !== i && i,
                'aria-controls': null !== (a = F.id) && void 0 !== a ? a : void 0,
                'aria-haspopup': 'listbox',
                'aria-expanded': null !== F.id || void 0,
                'aria-activedescendant': null !== (o = F.activeDescendant) && void 0 !== o ? o : void 0,
                'aria-invalid': l.length > P,
                'aria-describedby': U,
                'aria-labelledby': B,
                'aria-autocomplete': 'list'
            },
            j = I
                ? (0, s.jsx)(O.Z, {
                      ref: this.ref,
                      ...V,
                      type: E,
                      value: d ? (0, N.JM)('') : c,
                      canUseCommands: null === (n = E.commands) || void 0 === n ? void 0 : n.enabled,
                      canOnlyUseTextCommands: S
                  })
                : (0, s.jsx)(R.Z, {
                      ref: this.ref,
                      ...V,
                      value: d ? '' : l
                  });
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(y.d9, {
                    event: L.CkL.INSERT_TEXT,
                    handler: this.handleInsertText
                }),
                (0, s.jsx)(y.d9, {
                    event: L.CkL.CLEAR_TEXT,
                    handler: this.handleClearText
                }),
                j
            ]
        });
    }
    constructor(e) {
        var n;
        super(e),
            (n = this),
            P(this, 'ref', o.createRef()),
            P(this, '_focusBlurQueue', Promise.resolve()),
            P(this, '_unsubscribe', void 0),
            P(this, 'handleSelectionChange', () => {
                if (this.props.focused) {
                    var e, n, r;
                    this.props.onSelectionChanged(null === (n = (r = document).getSelection) || void 0 === n ? void 0 : null === (e = n.call(r)) || void 0 === e ? void 0 : e.toString());
                }
            }),
            P(this, 'focus', () => {
                var e;
                null === (e = this._focusBlurQueue) ||
                    void 0 === e ||
                    e.then(() => {
                        this.setState({ focused: !0 }, () => {
                            let e = this.ref.current;
                            null != e && e.focus();
                        });
                    });
            }),
            P(this, 'saveCurrentText', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    { type: r, channel: i } = n.props;
                r.drafts.autoSave && (e && n.saveCurrentTextThrottled.cancel(), n.handleSaveCurrentText(i.id));
            }),
            P(this, 'handleBeforeUnload', () => this.saveCurrentText()),
            P(this, 'saveCurrentTextThrottled', d().throttle(this.saveCurrentText.bind(this, !1), 500)),
            P(this, 'handleEnter', (e) => {
                var n, r;
                return null === (n = (r = this.props).onEnter) || void 0 === n ? void 0 : n.call(r, e);
            }),
            P(this, 'handleTab', () => {
                var e, n;
                return null === (e = (n = this.props).onTab) || void 0 === e ? void 0 : e.call(n);
            }),
            P(this, 'handleMoveSelection', (e) => {
                var n, r;
                return null === (n = (r = this.props).onMoveSelection) || void 0 === n ? void 0 : n.call(r, e);
            }),
            P(this, 'maybeShowAutocomplete', () => {
                var e, n;
                return null === (e = (n = this.props).onMaybeShowAutocomplete) || void 0 === e ? void 0 : e.call(n);
            }),
            P(this, 'hideAutocomplete', () => {
                var e, n;
                return null === (e = (n = this.props).onHideAutocomplete) || void 0 === e ? void 0 : e.call(n);
            }),
            P(this, 'handleSaveCurrentText', (e) => {
                m.Z.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
            }),
            P(this, 'handleClearText', () => {
                var e, n;
                null === (e = (n = this.props).onChange) || void 0 === e || e.call(n, null, '', (0, N.JM)(''));
            }),
            P(this, 'handleInsertText', (e) => {
                let { plainText: n, rawText: r, addSpace: i = !1 } = e;
                !this.props.disabled && (this.appendText(n, r, i), this.focus());
            }),
            P(this, 'handleFocus', (e) => {
                let { onFocus: n } = this.props,
                    { focused: r } = this.state;
                null == n || n(e), !r && this.setState({ focused: !0 });
            }),
            P(this, 'handleBlur', (e) => {
                let { onBlur: n } = this.props,
                    { focused: r } = this.state;
                null == n || n(e), r && this.setState({ focused: !1 });
            }),
            P(this, 'handlePaste', (e) => {
                let { channel: n, canPasteFiles: r, uploadPromptCharacterCount: i, promptToUpload: a, maxCharacterCount: s, type: o } = this.props;
                if (null == a || (!n.isPrivate() && !r) || (n.isPrivate() && n.isManaged())) return !1;
                let l = (e, r) => {
                        var i, s;
                        let l = I.Z.getActiveCommand(n.id);
                        if (null == l)
                            return a(e, n, o.drafts.type, {
                                requireConfirm: !0,
                                showLargeMessageDialog: r
                            });
                        let u = null !== (i = o.drafts.commandType) && void 0 !== i ? i : o.drafts.type,
                            c = null,
                            d = I.Z.getActiveOption(n.id);
                        if (
                            null !=
                            (c =
                                (null == d ? void 0 : d.type) === E.jw.ATTACHMENT
                                    ? d
                                    : null === (s = l.options) || void 0 === s
                                      ? void 0
                                      : s.find((e) => {
                                            if (e.type === E.jw.ATTACHMENT) return null == b.Z.getUpload(n.id, e.name, u);
                                        }))
                        )
                            g.Z.setFile({
                                channelId: n.id,
                                id: c.name,
                                draftType: u,
                                file: {
                                    id: c.name,
                                    platform: v.ow.WEB,
                                    file: e[0]
                                }
                            });
                    },
                    u = null != i ? i : s,
                    { files: c } = B(e.clipboardData, o.uploadLongMessages ? u : null);
                return (
                    M(
                        'onPaste',
                        [...e.clipboardData.items].map((e) => {
                            if ('file' !== e.kind)
                                return {
                                    kind: e.kind,
                                    type: e.type
                                };
                            {
                                let n = e.getAsFile();
                                return {
                                    kind: e.kind,
                                    type: e.type,
                                    name: null == n ? void 0 : n.name,
                                    path: null == n ? void 0 : n.path
                                };
                            }
                        })
                    ),
                    0 !== c.length && (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), l(c), this.focus(), !0)
                );
            }),
            (this._unsubscribe = C.p8.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = {
                focused: !1,
                submitting: !1,
                popup: C.p8.getState()
            });
    }
}
function B(e, n) {
    let r = [],
        i = [],
        a = null,
        s = null;
    for (let n of e.items)
        if ('file' === n.kind) {
            let e = n.getAsFile();
            if (null == e) continue;
            null != e.path && e.path.length > 0 ? r.push(e) : i.push(e);
        } else 'string' === n.kind && ('text/plain' === n.type && null == a ? (a = n) : 'text/html' === n.type && null == s && (s = n));
    if (r.length > 0) return { files: r };
    if (i.length > 0) {
        if (1 === i.length && 'image/png' === i[0].type && null != s) {
            var o;
            let n = i[0],
                r = null !== (o = G(e.getData(s.type))) && void 0 !== o ? o : n.name;
            return { files: [(0, S.dp)(n, r, n.type)] };
        }
        return { files: i };
    }
    if (null != a && null != n) {
        let r = e.getData(a.type);
        if (r.length > n) {
            let e = new Blob([r], { type: 'text/plain' });
            return {
                files: [(0, S.dp)(e, 'message.txt')],
                convertedStringToFile: !0
            };
        }
    }
    return { files: [] };
}
function G(e) {
    let n = new DOMParser().parseFromString(e, 'text/html').querySelector('img');
    if (null != n) {
        let e;
        try {
            let { pathname: r } = h.parse(n.src);
            null != r && r.length > 0 && (e = _().basename(r).split('.')[0]);
        } catch (e) {}
        if (null != e && e.length > 0) return ''.concat(e, '.png');
    }
}
