(n.d(t, {
    Z: () => eS,
    l: () => eA
}),
    n(642613),
    n(415506),
    n(539854),
    n(388685),
    n(35282),
    n(49124));
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    c = n(913527),
    u = n.n(c),
    d = n(873546),
    f = n(442837),
    _ = n(755721),
    p = n(481060),
    h = n(570140),
    m = n(26151),
    g = n(493683),
    E = n(529103),
    b = n(447543),
    y = n(708690),
    O = n(194359),
    v = n(425493),
    I = n(794433),
    T = n(493773),
    S = n(40851),
    A = n(100527),
    N = n(367907),
    C = n(906732),
    w = n(43267),
    R = n(933557),
    P = n(600164),
    D = n(313201),
    L = n(429090),
    x = n(912114),
    k = n(366980),
    j = n(703656),
    M = n(93127),
    U = n(752048),
    G = n(131704),
    B = n(592125),
    Z = n(341165),
    F = n(544610),
    V = n(19780),
    H = n(306680),
    Y = n(699516),
    W = n(246946),
    K = n(594174),
    z = n(626135),
    q = n(572004),
    $ = n(585483),
    X = n(823379),
    Q = n(709054),
    J = n(51144),
    ee = n(73752),
    et = n(665149),
    en = n(575464),
    er = n(981631),
    ei = n(388032),
    ea = n(382314),
    eo = n(20493);
function es(e, t, n) {
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
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                es(e, t, n[t]);
            }));
    }
    return e;
}
function ec(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function eu(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ec(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ed(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ef(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function ef(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let e_ = 48,
    ep = 42,
    eh = 24,
    em = (0, D.hQ)(),
    eg = (0, D.hQ)(),
    eE = 110;
function eb(e) {
    let { className: t, children: n } = e;
    return (0, i.jsxs)(P.Z, {
        align: P.Z.Align.CENTER,
        justify: P.Z.Justify.CENTER,
        direction: P.Z.Direction.VERTICAL,
        className: s()(ea.errorState, t),
        children: [(0, i.jsx)('div', { className: s()(ea.errorStateIcon, eo.marginBottom20) }), n]
    });
}
let ey = (e) => {
        var t;
        let { channel: n, onClose: r } = e,
            a = null != (t = (0, R.ZP)(n)) ? t : '',
            o = (0, f.e7)([H.ZP], () => {
                var e;
                return null != (e = H.ZP.lastMessageId(n.id)) ? e : n.id;
            });
        return (0, i.jsx)(p.P3F, {
            onClick: () => {
                ((0, j.XU)(er.ME, n.id), r());
            },
            children: (0, i.jsxs)('div', {
                className: ea.confirmChannelItemContainer,
                children: [
                    (0, i.jsx)(p.qEK, {
                        src: (0, w.x)(n),
                        size: p.EFr.SIZE_24,
                        'aria-label': a
                    }),
                    (0, i.jsx)('span', {
                        className: ea.confirmChannelName,
                        children: a
                    }),
                    (0, i.jsx)('span', {
                        className: ea.lastActiveTimestamp,
                        children: u()(Q.default.extractTimestamp(o)).fromNow()
                    })
                ]
            })
        });
    },
    eO = (e) => {
        var { onConfirm: t, channelIds: n } = e,
            r = ed(e, ['onConfirm', 'channelIds']);
        let a = (0, f.Wu)([B.Z], () => Array.from(n).map(B.Z.getChannel), [n]);
        return (0, i.jsxs)(
            p.ConfirmModal,
            eu(
                el(
                    {
                        header: ei.intl.string(ei.t.uFHxNT),
                        confirmText: ei.intl.string(ei.t.KCNNJi),
                        cancelText: ei.intl.string(ei.t['ETE/oK']),
                        onConfirm: t,
                        confirmButtonColor: _.zx.Colors.BRAND
                    },
                    r
                ),
                {
                    children: [
                        (0, i.jsx)(p.Text, {
                            variant: 'text-md/normal',
                            children: ei.intl.string(ei.t.rIsSqK)
                        }),
                        (0, i.jsx)(p.vwX, {
                            className: ea.selectExistingFormHeader,
                            children: ei.intl.string(ei.t.cjE7wM)
                        }),
                        (0, i.jsx)(p.Ttm, {
                            className: ea.confirmInviteScroller,
                            children: a
                                .filter(X.lm)
                                .sort((e, t) => {
                                    var n, r;
                                    let i = null != (n = e.lastMessageId) ? n : e.id,
                                        a = null != (r = t.lastMessageId) ? r : t.id;
                                    return Q.default.compare(a, i);
                                })
                                .map((e) =>
                                    (0, i.jsx)(
                                        ey,
                                        {
                                            onClose: r.onClose,
                                            channel: e
                                        },
                                        e.id
                                    )
                                )
                        })
                    ]
                }
            )
        );
    };
class ev extends (r = a.PureComponent) {
    componentDidUpdate(e) {
        if (e.selectedUsers !== this.props.selectedUsers || e.query !== this.props.query) {
            var t, n;
            null == (t = (n = this.props).updatePosition) || t.call(n);
        }
    }
    _getAnalyticsEntryPoint() {
        let { channel: e } = this.props,
            t = '',
            n = '';
        return (
            null != e ? (e.isDM() ? ((t = 'Add Friends to DM'), (n = 'DM')) : ((t = 'Add Friends to DM'), (n = 'Group DM'))) : ((t = 'New Group DM'), (n = 'Friends List')),
            {
                entryPointType: t,
                entryPointSource: n
            }
        );
    }
    componentDidMount() {
        let { channel: e } = this.props;
        h.Z.wait(() => y.Z.open(null == e ? void 0 : e.id));
        let t = (0, N.v_)(e);
        (z.default.track(
            er.rMx.OPEN_POPOUT,
            eu(el({}, t), {
                type: this._getAnalyticsEntryPoint().entryPointType,
                source: this._getAnalyticsEntryPoint().entryPointSource,
                is_friend: !this.isNotFriends()
            })
        ),
            $.S.subscribe(er.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            $.S.subscribe(er.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown));
    }
    componentWillUnmount() {
        ($.S.unsubscribe(er.CkL.SCROLL_PAGE_UP, this.scrollPageUp), $.S.unsubscribe(er.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), h.Z.wait(() => y.Z.close()));
    }
    isNotFriends() {
        let { channel: e } = this.props;
        if (null == e || !e.isDM()) return !1;
        let t = e.getRecipientId();
        if (null == t) throw Error('no recipient in DM');
        return !Y.Z.isFriend(t);
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = ee.Z.getCurrentConfig({ location: '5326c5_1' }, { autoTrackExposure: !1 });
        b.ZP.createInvite(e.id, { max_age: t }, er.t4x.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = K.default.getCurrentUser();
        return null != t && t.isStaff() ? er.p3w : null != e && e.userLimit > 0 ? e.userLimit : er.pAY;
    }
    getRemaining() {
        let { channel: e, selectedUsers: t } = this.props,
            n = (null == e ? 0 : e.recipients.length) + 1;
        return this.getMaxParticipants() - t.size - n;
    }
    renderCreateGroupButton() {
        let { channel: e, selectedUsers: t } = this.props,
            n = this.getRemaining(),
            r = (null != e && 0 === t.size) || n < 0,
            a = t.size > 1 || null != e ? ei.intl.string(ei.t.ZGMNAw) : ei.intl.string(ei.t['6Urw1t']);
        return (0, i.jsx)(p.zxk, {
            variant: 'primary',
            fullWidth: !0,
            disabled: r,
            onClick: this.handleInviteUsers,
            text: a
        });
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            r = 0 === t.size || n < 0;
        return (0, i.jsx)('div', {
            className: ea.addButton,
            children: (0, i.jsx)(p.zxk, {
                variant: 'primary',
                size: 'sm',
                text: ei.intl.string(ei.t.OYkgVl),
                disabled: r,
                onClick: this.handleInviteUsers
            })
        });
    }
    renderSubtitle() {
        if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
        let e = this.getRemaining(),
            t = e <= 0 ? ei.intl.formatToPlainString(ei.t.xYr009, { number: this.getMaxParticipants() }) : ei.intl.formatToPlainString(ei.t.HrSDPD, { number: e });
        return (0, i.jsx)(p.Text, {
            variant: 'text-xs/normal',
            className: s()(ea.subtitle, { [ea.subtitleWarning]: e < 0 }, eo.marginTop4),
            children: t
        });
    }
    renderSearchBar() {
        var e;
        let { query: t, hasFriends: n, results: r, selectedRow: a, selectedUsers: o } = this.props;
        if (!n || this.isNotFriends()) return null;
        let s = [];
        return (
            o.forEach((e) => {
                let t = K.default.getUser(e);
                null != t && s.push(J.ZP.getName(t));
            }),
            (0, i.jsxs)('div', {
                className: ea.searchBar,
                children: [
                    (0, i.jsx)(I.Z, {
                        ref: this.searchBarRef,
                        className: ea.searchBarComponent,
                        autoFocus: !0,
                        placeholder: 0 === o.size ? ei.intl.string(ei.t.Wxnb6u) : '',
                        disabled: this.isPartyFull(),
                        size: I.Z.Sizes.MEDIUM,
                        maxHeight: this.props.inBornThisNamedExperiment ? eE : void 0,
                        query: t,
                        selectedRow: a,
                        sections: [null != (e = null == r ? void 0 : r.length) ? e : 0],
                        tags: s,
                        onSelect: this.handleSelect,
                        onSelectionChange: this.handleSelectionChange,
                        onQueryChange: this.handleQueryChange,
                        onRemoveTag: this.handleRemoveUser,
                        onHeightChange: this.scrollToCounterSearchBarHeightChange,
                        inputProps: {
                            'aria-labelledby': em,
                            'aria-controls': eg,
                            'aria-expanded': !0,
                            'aria-activedescendant': 'user-row-'.concat(a),
                            autoComplete: 'off'
                        }
                    }),
                    this.renderAddUsersButton()
                ]
            })
        );
    }
    renderHeader() {
        let e = null != this.scrollerRef.current && this.state.separator,
            t = this.isNotFriends() ? ei.intl.string(ei.t.Xjlbvr) : ei.intl.string(ei.t.CdNhGR);
        return (0, i.jsxs)(p.xBx, {
            direction: P.Z.Direction.VERTICAL,
            align: P.Z.Align.STRETCH,
            className: ea.header,
            separator: e,
            children: [
                d.tq ? this.renderMobileCloseButton() : null,
                (0, i.jsx)(p.X6q, {
                    id: em,
                    variant: 'heading-lg/semibold',
                    children: t
                }),
                this.renderSubtitle(),
                (0, i.jsx)(p.olH, {
                    className: ea.closeButton,
                    onClick: this.props.onClose
                })
            ]
        });
    }
    renderBody() {
        let { channel: e, hasFriends: t, results: n } = this.props;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error('no recipient in DM');
            let n = K.default.getUser(t),
                r = null != n ? n.username : '',
                a = null != n && Y.Z.getRelationshipType(n.id) === er.OGo.PENDING_OUTGOING;
            return (0, i.jsxs)(eb, {
                className: ea.notFriends,
                children: [
                    (0, i.jsx)(p.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: ei.intl.format(ei.t['eg+R9/'], { username: r })
                    }),
                    (0, i.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: eo.marginTop20,
                        children: (0, i.jsx)(p.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: a ? ei.intl.string(ei.t.xMH6vL) : ei.intl.string(ei.t['PMsq/f']),
                            disabled: a,
                            onClick: () => (null != n ? this.handleAddFriend(n) : null)
                        })
                    })
                ]
            });
        }
        return t
            ? this.isPartyFull()
                ? (0, i.jsxs)(eb, {
                      className: ea.partyFull,
                      children: [(0, i.jsx)('div', { children: ei.intl.string(ei.t.OtTQDw) }), (0, i.jsx)('div', { children: ei.intl.format(ei.t.xYr009, { number: this.getMaxParticipants() }) })]
                  })
                : 0 === n.length
                  ? (0, i.jsx)(eb, {
                        className: s()(ea.noResults, eo.marginBottom20),
                        children: (0, i.jsx)('div', { children: ei.intl.string(ei.t.SV4DJy) })
                    })
                  : (0, i.jsx)(p.aVo, {
                        ref: this.scrollerRef,
                        sections: [n.length],
                        className: ea.scroller,
                        innerClassName: ea.scrollerInner,
                        renderRow: this.renderRow,
                        rowHeight: this.getRowHeight,
                        renderSection: this.renderSection,
                        sectionHeight: 0,
                        onScroll: this.handleScroll,
                        paddingTop: 0,
                        paddingBottom: 14,
                        fade: !0,
                        role: void 0,
                        innerRole: 'listbox',
                        innerId: eg,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: 'vertical'
                    })
            : (0, i.jsxs)(eb, {
                  className: ea.noFriends,
                  children: [
                      (0, i.jsx)('div', { children: ei.intl.string(ei.t['7orY6O']) }),
                      (0, i.jsx)('div', {
                          'data-button-hoisted-classname-wrapper': !0,
                          className: eo.marginTop20,
                          children: (0, i.jsx)(p.zxk, {
                              variant: 'primary',
                              size: 'sm',
                              text: ei.intl.string(ei.t.w5uwoK),
                              autoFocus: !0,
                              fullWidth: !0,
                              onClick: this.handleAddFriendNavigation
                          })
                      })
                  ]
              });
    }
    renderSection() {
        return null;
    }
    renderInviteLink() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: r } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let o = null != t ? (0, k.Z)(t.code) : '',
            l = o.length > 0;
        return (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(p.vwX, {
                    tag: 'h5',
                    className: eo.marginBottom8,
                    children: ei.intl.string(ei.t.t3O2BQ)
                }),
                (0, i.jsx)(p.kO8, {
                    supportsCopy: q.wS,
                    placeholder: (0, k.Z)(ei.intl.string(ei.t.lPVBqK)),
                    value: l ? (n ? ei.intl.string(ei.t['6HzNgY']) : o) : '',
                    buttonColor: _.zx.Colors.BRAND,
                    text: l ? (r ? ei.intl.string(ei.t.q30c5u) : ei.intl.string(ei.t.OpuAlJ)) : ei.intl.string(ei.t.qzxqUV),
                    mode: r ? p.uA3.SUCCESS : p.uA3.DEFAULT,
                    onCopy: () => {
                        l ? this.handleCopyInvite(o) : this.createInvite();
                    }
                }),
                o.length > 0
                    ? (0, i.jsx)(p.Text, {
                          variant: 'text-xs/normal',
                          className: s()(eo.marginTop8, ea.footerText),
                          children: ei.intl.format(ei.t.ZVdJMz, { numHours: ''.concat(eh) })
                      })
                    : null
            ]
        });
    }
    renderFooter() {
        let { hasFriends: e, channel: t, selectedUsers: n } = this.props;
        if (this.isNotFriends() || !e || this.isPartyFull()) return null;
        if (null == t)
            return (0, i.jsxs)(p.mzw, {
                className: ea.footer,
                children: [
                    n.size > 1 &&
                        (0, i.jsx)(eI, {
                            previewIcon: this.state.previewIcon,
                            selectedUsers: n,
                            channelName: this.state.newChannelName,
                            onChange: this.handleChannelNameChange,
                            onIconChange: this.handleIconChange,
                            onIconRemove: this.handleIconRemove
                        }),
                    (0, i.jsxs)(p.hE2, {
                        fullWidth: !0,
                        direction: 'horizontal',
                        children: [
                            (0, i.jsx)(p.zxk, {
                                variant: 'secondary',
                                text: ei.intl.string(ei.t['ETE/oK']),
                                onClick: this.props.onClose
                            }),
                            this.renderCreateGroupButton()
                        ]
                    })
                ]
            });
        let r = t.isDM() ? this.renderCreateGroupButton() : this.renderInviteLink();
        if (null != r)
            return (0, i.jsx)(p.mzw, {
                className: ea.footer,
                children: r
            });
    }
    render() {
        let { transitionState: e, inBornThisNamedExperiment: t } = this.props;
        return (0, i.jsxs)(p.Y0X, {
            transitionState: null != e ? e : p.Dvm.ENTERED,
            className: s()(ea.popout, {
                [ea.showAsModal]: t,
                [ea.showAsPopout]: !t
            }),
            fullscreenOnMobile: !1,
            parentComponent: 'PrivateChannelRecipientsInvite',
            children: [this.renderHeader(), this.renderSearchBar(), this.renderBody(), this.renderFooter()]
        });
    }
    handleAddFriend(e) {
        (this.props.onClose(),
            O.Z.sendRequest({
                discordTag: J.ZP.getUserTag(e, { identifiable: 'always' }),
                context: { location: 'Group DM' }
            }));
    }
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                var t;
                let n = U.Z.getUserAffinity(e);
                return null != (t = null == n ? void 0 : n.communicationProbability) ? t : -1;
            })
        };
    }
    constructor(...e) {
        (super(...e),
            es(this, 'state', {
                separator: !1,
                copied: !1,
                newChannelName: '',
                previewIcon: void 0
            }),
            es(this, 'copyTimeout', void 0),
            es(this, 'scrollerRef', a.createRef()),
            es(this, 'searchBarRef', a.createRef()),
            es(this, '_mobileCloseRef', a.createRef()),
            es(this, '_searchCounter', 0),
            es(this, '_existingTimeout', null),
            es(this, 'scrollPageUp', () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollPageUp({ animate: !0 });
            }),
            es(this, 'scrollPageDown', () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollPageDown({ animate: !0 });
            }),
            es(this, 'renderMobileCloseButton', () =>
                (0, i.jsx)('div', {
                    className: ea.mobileToolsContainer,
                    ref: this._mobileCloseRef,
                    children: (0, i.jsx)(p.JcV, {
                        containerRef: this._mobileCloseRef,
                        children: (0, i.jsx)('div', {
                            children: (0, i.jsx)(v.Z, {
                                className: ea.mobileToolsCloseIcon,
                                closeAction: this.props.onClose,
                                keybind: 'ESC'
                            })
                        })
                    })
                })
            ),
            es(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                let { results: n } = this.props;
                return null != n[t] ? (this.props.inBornThisNamedExperiment ? e_ : ep) : 0;
            }),
            es(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: r, selectedUsers: a, selectedRow: o, hideDiscriminator: s } = this.props,
                    l = r[n];
                if (null == l) return null;
                let { user: c, comparator: u } = l,
                    d = a.has(c.id),
                    f = !d && 0 >= this.getRemaining();
                return (0, i.jsx)(
                    en.Z,
                    {
                        row: n,
                        user: c,
                        hideDiscriminator: s,
                        comparator: u,
                        checked: d,
                        disabled: f,
                        selected: n === o,
                        onClick: this.handleClick,
                        onMouseEnter: this.focusResult,
                        'aria-posinset': n + 1,
                        'aria-setsize': r.length,
                        inlineUsername: !this.props.inBornThisNamedExperiment
                    },
                    c.id
                );
            }),
            es(this, 'forceFocus', () => {
                let e = this.searchBarRef.current;
                null == e || e.focus();
            }),
            es(this, 'focusResult', (e) => {
                y.Z.select(e);
            }),
            es(this, 'handleSelect', (e, t) => {
                let { results: n, channel: r } = this.props;
                null == t ? y.Z.clear(null == r ? void 0 : r.id) : null != n && this.handleClick(n[t].user.id);
            }),
            es(this, 'handleSelectionChange', (e, t) => {
                y.Z.select(t);
                let n = this.scrollerRef.current;
                null != n &&
                    n.scrollToIndex({
                        section: e,
                        row: t,
                        padding: 8
                    });
            }),
            es(this, 'handleQueryChange', (e) => {
                let { channel: t } = this.props,
                    n = (0, N.v_)(t);
                (y.Z.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        (z.default.track(
                            er.rMx.SEARCH_USER_LIST_STARTED,
                            eu(el({}, n), {
                                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                                search_query_length: e.length
                            })
                        ),
                            this._searchCounter++);
                    }, 500)));
            }),
            es(this, 'handleRemoveUser', (e) => {
                let t = Array.from(this.props.selectedUsers);
                (y.Z.removeUser(t[e]), this.forceFocus());
            }),
            es(this, 'handleClick', (e) => {
                let { selectedUsers: t, query: n, channel: r } = this.props;
                (t.has(e) ? y.Z.removeUser(e) : this.getRemaining() > 0 && (y.Z.addUser(e), n.length > 0 && y.Z.clear(null == r ? void 0 : r.id)), this.forceFocus());
            }),
            es(this, 'handleAddFriendNavigation', () => {
                (E.Z.transitionToSection(er.pJs.ADD_FRIEND, { explicit: !0 }), this.props.onClose());
            }),
            es(this, 'handleScroll', () => {
                let e = this.scrollerRef.current;
                null != e && this.setState({ separator: !e.isScrolledToTop() });
            }),
            es(this, 'handleChannelNameChange', (e) => {
                this.setState({ newChannelName: e });
            }),
            es(this, 'handleIconChange', (e) => {
                let { imageUri: t } = e;
                this.setState({ previewIcon: t });
            }),
            es(this, 'handleIconRemove', () => {
                this.setState({ previewIcon: null });
            }),
            es(this, 'createNewDM', (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    r = (0, N.v_)(n),
                    i = !0;
                (1 === e.length && (i = null == g.Z._openCachedDMChannel(e[0])),
                    z.default.track(
                        er.rMx.CREATE_DM_USER_LIST_CLICKED,
                        eu(el({}, r), {
                            is_new_dm: i,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: e,
                            num_searches: t,
                            affinity_score: this._getUserAffinities(e).affinities,
                            name_is_set: '' !== this.state.newChannelName,
                            icon_is_set: null != this.state.previewIcon
                        })
                    ),
                    g.Z.openPrivateChannel({
                        recipientIds: e,
                        location: 'New Group DM'
                    }).then((e) => {
                        let t = {};
                        ('' !== this.state.newChannelName && (t.name = this.state.newChannelName),
                            null != this.state.previewIcon && (t.icon = this.state.previewIcon),
                            (null != t.name || null != t.icon) && g.Z.updateChannel(e, t, A.Z.NEW_GROUP_DM_INVITE_MODAL),
                            z.default.track(er.rMx.GDM_EDIT_INTERACTED, {
                                channel_id: e,
                                channel_type: er.d4z.GROUP_DM,
                                location: A.Z.NEW_GROUP_DM_INVITE_MODAL,
                                new_name_set: '' !== this.state.newChannelName,
                                new_icon_set: null != this.state.previewIcon
                            }));
                    }));
            }),
            es(this, 'pushToExistingDM', (e, t) => {
                let n = this._searchCounter,
                    r = (0, N.v_)(e),
                    i = V.Z.getChannelId() === e.id;
                (g.Z.addRecipients(e.id, t, er.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (i) {
                        if (e.isDM() && n !== e.id) return void m.Z.call(n, !1, !0);
                        m.Z.ring(n, t, 'dm_invite');
                    }
                }),
                    z.default.track(
                        er.rMx.CREATE_DM_USER_LIST_CLICKED,
                        eu(el({}, r), {
                            is_new_dm: !0,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: t,
                            num_searches: n,
                            affinity_score: this._getUserAffinities(t).affinities
                        })
                    ));
            }),
            es(this, 'handleInviteUsers', () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    r = Array.from(t);
                if (null != e) {
                    let t = eN(Array.from(new Set([...e.recipients, ...r])));
                    t.size > 0
                        ? (0, p.h7j)(
                              (n) =>
                                  (0, i.jsx)(
                                      eO,
                                      eu(el({}, n), {
                                          onConfirm: () => this.pushToExistingDM(e, r),
                                          channelIds: t
                                      })
                                  ),
                              {},
                              (0, p.VnL)(this.context.appContext)
                          )
                        : this.pushToExistingDM(e, r);
                } else {
                    let e = eN(r);
                    r.length > 1 && e.size > 0
                        ? (0, p.h7j)(
                              (t) =>
                                  (0, i.jsx)(
                                      eO,
                                      eu(el({}, t), {
                                          onConfirm: () => this.createNewDM(r),
                                          channelIds: e
                                      })
                                  ),
                              {},
                              (0, p.VnL)(this.context.appContext)
                          )
                        : this.createNewDM(r);
                }
                n();
            }),
            es(this, 'handleCopyInvite', (e) => {
                let { channel: t, invite: n } = this.props;
                (null != n && (0, q.JG)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({ copied: !0 }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({ copied: !1 });
                    }, 1000)),
                    z.default.track(er.rMx.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: er.Sbl.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null
                    }));
            }),
            es(this, 'scrollToCounterSearchBarHeightChange', (e) => {
                var t, n;
                if (!this.props.inBornThisNamedExperiment) return;
                let r = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? void 0 : t.call(n);
                null != r && (r.scrollTop = Math.max(0, r.scrollTop + e));
            }));
    }
}
function eI(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: a, onIconRemove: o, onChange: s } = e,
        { analyticsLocations: l } = (0, C.ZP)(A.Z.NEW_GROUP_DM_INVITE_MODAL);
    if (!(0, L.a)(A.Z.NEW_GROUP_DM_INVITE_MODAL)) return null;
    let c = (0, R.pT)(Array.from(t), K.default, Y.Z);
    return (0, i.jsxs)('div', {
        className: ea.customizationContainer,
        children: [
            (0, i.jsx)(x.B, {
                className: ea.iconSelector,
                channel: null,
                previewIcon: r,
                onIconChange: a,
                onIconRemove: o,
                analyticsLocations: l,
                petite: !0,
                allowRemovingIcon: !1
            }),
            (0, i.jsx)(p.Text, {
                className: ea.channelNameLabel,
                variant: 'text-sm/medium',
                color: 'header-muted',
                children: ei.intl.string(ei.t.YynaLC)
            }),
            (0, i.jsx)(_.Is, {
                'aria-label': ei.intl.string(ei.t.YynaLC),
                className: ea.channelNameInput,
                inputClassName: ea.channelNameInputInner,
                name: 'create-gdm-channel-name',
                placeholder: c,
                value: n,
                onChange: s
            })
        ]
    });
}
function eT(e) {
    var { channel: t } = e,
        n = ed(e, ['channel']);
    let r = (0, f.cj)([F.Z, Z.Z, W.Z], () => {
        let e;
        return (
            null != t && null != (e = Z.Z.getInvite(t.id)) && e.isExpired() && (e = null),
            eu(el({}, F.Z.getState()), {
                invite: e,
                hideDiscriminator: W.Z.hidePersonalInformation,
                hideInstantInvites: W.Z.hideInstantInvites
            })
        );
    });
    return (0, i.jsx)(ev, el({ channel: t }, n, r));
}
function eS(e) {
    var t, n;
    let { channel: r, iconClassName: o, className: s, icon: l, tooltip: c, tooltipPosition: u = 'bottom', popoutPosition: d = 'bottom', popoutAlign: _ = 'right', subscribeToGlobalHotkey: h = !1, location: m } = e,
        g = null != l ? l : null == r ? p.kL_ : p.ejJ,
        E = (0, L.a)(m),
        b = 'channel-invite-modal-'.concat(null == r ? void 0 : r.id),
        y = (0, p.VXO)(b),
        O = a.useCallback(
            () =>
                (0, p.ZDy)(
                    () =>
                        Promise.resolve((e) =>
                            (0, i.jsx)(
                                eT,
                                eu(el({}, e), {
                                    channel: r,
                                    inBornThisNamedExperiment: E
                                })
                            )
                        ),
                    { modalKey: b }
                ),
            [r, b, E]
        ),
        v = a.useRef(null),
        [I, S] = a.useState(null != r && r.isGroupDM() && 0 === r.recipients.length),
        A = a.useCallback(() => {
            let e = () => (y ? (0, p.Mr3)(b) : O()),
                t = () => S((e) => !e);
            return E ? e() : t();
        }, [E, y, b, O]);
    a.useEffect(
        () => (
            h && $.S.subscribe(er.CkL.TOGGLE_DM_CREATE, A),
            () => {
                $.S.unsubscribe(er.CkL.TOGGLE_DM_CREATE, A);
            }
        ),
        [h, A, E]
    );
    let N = (0, f.e7)([K.default], () => K.default.getUser(null == r ? void 0 : r.getRecipientId())),
        C = (e) =>
            (0, i.jsx)(
                eT,
                eu(el({}, e), {
                    onClose: e.closePopout,
                    channel: r,
                    inBornThisNamedExperiment: E
                })
            );
    return ((0, T.ZP)(() => {
        (0, M._)();
    }),
    (null != (t = null == N ? void 0 : N.bot) && t) || (null != (n = null == N ? void 0 : N.isProvisional) && n))
        ? null
        : E
          ? (0, i.jsx)(et.ZP.Icon, {
                ref: v,
                onClick: O,
                icon: g,
                className: s,
                iconClassName: o,
                tooltip: c,
                tooltipPosition: u
            })
          : (0, i.jsx)(p.yRy, {
                targetElementRef: v,
                renderPopout: C,
                position: d,
                shouldShow: I,
                nudgeAlignIntoViewport: !0,
                autoInvert: !0,
                align: _,
                onRequestClose: () => S(!1),
                animation: p.yRy.Animation.NONE,
                ignoreModalClicks: !0,
                clickTrap: !0,
                children: (e) =>
                    (0, i.jsx)(
                        et.ZP.Icon,
                        eu(el({}, e), {
                            ref: v,
                            onClick: A,
                            icon: g,
                            className: s,
                            iconClassName: o,
                            tooltip: c,
                            tooltipPosition: u
                        })
                    )
            });
}
function eA(e) {
    let { channel: t, popoutPosition: n = 'bottom', popoutAlign: r = 'right' } = e;
    (0, T.ZP)(() => {
        (0, M._)();
    });
    let o = (0, L.a)('PrivateChannelRecipientsInviteTextButton'),
        s = a.useRef(null),
        [l, c] = a.useState(!1),
        u = a.useCallback(() => c((e) => !e), []),
        d = (e) =>
            (0, i.jsx)(
                eT,
                eu(el({}, e), {
                    onClose: e.closePopout,
                    channel: t,
                    inBornThisNamedExperiment: o
                })
            ),
        f = a.useCallback(
            () =>
                (0, p.ZDy)(() =>
                    Promise.resolve((e) =>
                        (0, i.jsx)(
                            eT,
                            eu(el({}, e), {
                                channel: t,
                                inBornThisNamedExperiment: o
                            })
                        )
                    )
                ),
            [t, o]
        );
    return o
        ? (0, i.jsx)(p.zxk, {
              onClick: f,
              variant: 'primary',
              buttonRef: s,
              text: ei.intl.string(ei.t['6Qgren']),
              'aria-label': ei.intl.string(ei.t['6Qgren']),
              icon: p.ejJ
          })
        : (0, i.jsx)(p.yRy, {
              targetElementRef: s,
              renderPopout: d,
              position: n,
              shouldShow: l,
              nudgeAlignIntoViewport: !0,
              autoInvert: !0,
              align: r,
              onRequestClose: () => c(!1),
              animation: p.yRy.Animation.NONE,
              ignoreModalClicks: !0,
              clickTrap: !0,
              children: (e) =>
                  (0, i.jsx)(
                      p.zxk,
                      eu(el({}, e), {
                          onClick: u,
                          variant: 'primary',
                          buttonRef: s,
                          text: ei.intl.string(ei.t['6Qgren']),
                          'aria-label': ei.intl.string(ei.t['6Qgren']),
                          icon: p.ejJ
                      })
                  )
          });
}
function eN(e) {
    let t = eC(e);
    return new Set(
        (0, l.chain)(B.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, G.bc)(e.type))
            .filter((e) => eC(e.recipients) === t)
            .map((e) => e.id)
            .value()
    );
}
function eC(e) {
    return JSON.stringify(e.sort());
}
es(ev, 'contextType', S.ZP);
