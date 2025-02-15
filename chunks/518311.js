n.d(t, { Z: () => ed }), n(411104), n(653041), n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(392711),
    c = n.n(o),
    d = n(913527),
    u = n.n(d),
    h = n(873546),
    p = n(442837),
    m = n(481060),
    f = n(570140),
    g = n(26151),
    _ = n(493683),
    C = n(529103),
    x = n(447543),
    v = n(708690),
    E = n(194359),
    I = n(425493),
    b = n(461745),
    Z = n(40851),
    N = n(367907),
    T = n(43267),
    S = n(933557),
    j = n(600164),
    y = n(313201),
    A = n(366980),
    P = n(703656),
    R = n(93127),
    M = n(752048),
    L = n(131704),
    k = n(592125),
    O = n(341165),
    D = n(544610),
    w = n(19780),
    U = n(306680),
    B = n(699516),
    F = n(246946),
    H = n(594174),
    G = n(626135),
    V = n(572004),
    z = n(585483),
    W = n(823379),
    Y = n(709054),
    q = n(51144),
    K = n(73752),
    X = n(665149),
    J = n(575464),
    Q = n(981631),
    $ = n(388032),
    ee = n(501079),
    et = n(483938);
function en(e, t, n) {
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
let ei = (0, y.hQ)(),
    el = (0, y.hQ)();
function ea(e) {
    let { className: t, children: n } = e;
    return (0, l.jsxs)(j.Z, {
        align: j.Z.Align.CENTER,
        justify: j.Z.Justify.CENTER,
        direction: j.Z.Direction.VERTICAL,
        className: s()(ee.errorState, t),
        children: [(0, l.jsx)('div', { className: s()(ee.errorStateIcon, et.marginBottom20) }), n]
    });
}
let er = (e) => {
        var t;
        let { channel: n, onClose: i } = e,
            a = null !== (t = (0, S.ZP)(n)) && void 0 !== t ? t : '',
            r = (0, p.e7)([U.ZP], () => {
                var e;
                return null !== (e = U.ZP.lastMessageId(n.id)) && void 0 !== e ? e : n.id;
            });
        return (0, l.jsx)(m.P3F, {
            onClick: () => {
                (0, P.XU)(Q.ME, n.id), i();
            },
            children: (0, l.jsxs)('div', {
                className: ee.confirmChannelItemContainer,
                children: [
                    (0, l.jsx)(m.qEK, {
                        src: (0, T.x)(n),
                        size: m.EFr.SIZE_24,
                        'aria-label': a
                    }),
                    (0, l.jsx)('span', {
                        className: ee.confirmChannelName,
                        children: a
                    }),
                    (0, l.jsx)('span', {
                        className: ee.lastActiveTimestamp,
                        children: u()(Y.default.extractTimestamp(r)).fromNow()
                    })
                ]
            })
        });
    },
    es = (e) => {
        let { onConfirm: t, channelIds: n, ...i } = e,
            a = (0, p.Wu)([k.Z], () => Array.from(n).map(k.Z.getChannel), [n]);
        return (0, l.jsxs)(m.ConfirmModal, {
            header: $.intl.string($.t.uFHxNT),
            confirmText: $.intl.string($.t.KCNNJi),
            cancelText: $.intl.string($.t['ETE/oK']),
            onConfirm: t,
            confirmButtonColor: m.zxk.Colors.BRAND,
            ...i,
            children: [
                (0, l.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    children: $.intl.string($.t.rIsSqK)
                }),
                (0, l.jsx)(m.vwX, {
                    className: ee.selectExistingFormHeader,
                    children: $.intl.string($.t.cjE7wM)
                }),
                (0, l.jsx)(m.Ttm, {
                    className: ee.confirmInviteScroller,
                    children: a
                        .filter(W.lm)
                        .sort((e, t) => {
                            var n, i;
                            let l = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id,
                                a = null !== (i = t.lastMessageId) && void 0 !== i ? i : t.id;
                            return Y.default.compare(a, l);
                        })
                        .map((e) =>
                            (0, l.jsx)(
                                er,
                                {
                                    onClose: i.onClose,
                                    channel: e
                                },
                                e.id
                            )
                        )
                })
            ]
        });
    };
class eo extends (i = a.PureComponent) {
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
        f.Z.wait(() => v.Z.open(null == e ? void 0 : e.id));
        let t = (0, N.v_)(e);
        G.default.track(Q.rMx.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends()
        }),
            z.S.subscribe(Q.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            z.S.subscribe(Q.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        z.S.unsubscribe(Q.CkL.SCROLL_PAGE_UP, this.scrollPageUp), z.S.unsubscribe(Q.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), f.Z.wait(() => v.Z.close());
    }
    isNotFriends() {
        let { channel: e } = this.props;
        if (null == e || !e.isDM()) return !1;
        let t = e.getRecipientId();
        if (null == t) throw Error('no recipient in DM');
        return !B.Z.isFriend(t);
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = K.Z.getCurrentConfig({ location: '5326c5_1' }, { autoTrackExposure: !1 });
        x.Z.createInvite(e.id, { max_age: t }, Q.t4x.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = H.default.getCurrentUser();
        return null != t && t.isStaff() ? Q.p3w : null != e && e.userLimit > 0 ? e.userLimit : Q.pAY;
    }
    getRemaining() {
        let { channel: e, selectedUsers: t } = this.props,
            n = (null == e ? 0 : e.recipients.length) + 1;
        return this.getMaxParticipants() - t.size - n;
    }
    renderCreateGroupButton() {
        let { channel: e, selectedUsers: t } = this.props,
            n = this.getRemaining(),
            i = (null != e && 0 === t.size) || n < 0,
            a = t.size > 1 ? $.intl.string($.t.ZGMNAw) : $.intl.string($.t['6Urw1t']);
        return (0, l.jsx)(m.zxk, {
            fullWidth: !0,
            disabled: i,
            onClick: this.handleInviteUsers,
            children: a
        });
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            i = 0 === t.size || n < 0;
        return (0, l.jsx)('div', {
            className: ee.addButton,
            children: (0, l.jsx)(m.zxk, {
                size: m.zxk.Sizes.SMALL,
                disabled: i,
                onClick: this.handleInviteUsers,
                children: $.intl.string($.t.OYkgVl)
            })
        });
    }
    renderSubtitle() {
        if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
        let e = this.getRemaining(),
            t = e <= 0 ? $.intl.formatToPlainString($.t.xYr009, { number: this.getMaxParticipants() }) : $.intl.formatToPlainString($.t.HrSDPD, { number: e });
        return (0, l.jsx)(m.Text, {
            variant: 'text-xs/normal',
            className: s()(ee.subtitle, { [ee.subtitleWarning]: e < 0 }, et.marginTop4),
            children: t
        });
    }
    renderSearchBar() {
        var e;
        let { query: t, hasFriends: n, results: i, selectedRow: a, selectedUsers: r } = this.props;
        if (!n || this.isNotFriends()) return null;
        let o = [];
        return (
            r.forEach((e) => {
                let t = H.default.getUser(e);
                null != t && o.push(q.ZP.getName(t));
            }),
            (0, l.jsxs)(j.Z, {
                className: s()(ee.searchBar),
                children: [
                    (0, l.jsx)(b.ZP, {
                        ref: this.searchBarRef,
                        className: ee.searchBarComponent,
                        autoFocus: !0,
                        placeholder: 0 === r.size ? $.intl.string($.t.Wxnb6u) : void 0,
                        disabled: this.isPartyFull(),
                        size: b.ZP.Sizes.MEDIUM,
                        query: t,
                        selectedRow: a,
                        sections: [null !== (e = null == i ? void 0 : i.length) && void 0 !== e ? e : 0],
                        tags: o,
                        onSelect: this.handleSelect,
                        onSelectionChange: this.handleSelectionChange,
                        onQueryChange: this.handleQueryChange,
                        onRemoveTag: this.handleRemoveUser,
                        inputProps: {
                            'aria-labelledby': ei,
                            'aria-controls': el,
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
            t = this.isNotFriends() ? $.intl.string($.t.Xjlbvr) : $.intl.string($.t.CdNhGR);
        return (0, l.jsxs)(m.xBx, {
            direction: j.Z.Direction.VERTICAL,
            align: j.Z.Align.STRETCH,
            className: ee.header,
            separator: e,
            children: [
                h.tq ? this.renderMobileCloseButton() : null,
                (0, l.jsx)(m.X6q, {
                    id: ei,
                    variant: 'heading-lg/semibold',
                    children: t
                }),
                this.renderSubtitle()
            ]
        });
    }
    renderBody() {
        let { channel: e, hasFriends: t, results: n } = this.props;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error('no recipient in DM');
            let n = H.default.getUser(t),
                i = null != n ? n.username : '',
                a = null != n && B.Z.getRelationshipType(n.id) === Q.OGo.PENDING_OUTGOING;
            return (0, l.jsxs)(ea, {
                className: ee.notFriends,
                children: [
                    (0, l.jsx)(m.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: $.intl.format($.t['eg+R9/'], { username: i })
                    }),
                    (0, l.jsx)(m.zxk, {
                        disabled: a,
                        size: m.zxk.Sizes.SMALL,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                        className: et.marginTop20,
                        children: a ? $.intl.string($.t.xMH6vL) : $.intl.string($.t['PMsq/f'])
                    })
                ]
            });
        }
        return t
            ? this.isPartyFull()
                ? (0, l.jsxs)(ea, {
                      className: ee.partyFull,
                      children: [(0, l.jsx)('div', { children: $.intl.string($.t.OtTQDw) }), (0, l.jsx)('div', { children: $.intl.format($.t.xYr009, { number: this.getMaxParticipants() }) })]
                  })
                : 0 === n.length
                  ? (0, l.jsx)(ea, {
                        className: s()(ee.noResults, et.marginBottom20),
                        children: (0, l.jsx)('div', { children: $.intl.string($.t.SV4DJy) })
                    })
                  : (0, l.jsx)(m.aVo, {
                        ref: this.scrollerRef,
                        sections: [n.length],
                        className: ee.scroller,
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
                        innerId: el,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: 'vertical'
                    })
            : (0, l.jsxs)(ea, {
                  className: ee.noFriends,
                  children: [
                      (0, l.jsx)('div', { children: $.intl.string($.t['7orY6O']) }),
                      (0, l.jsx)(m.zxk, {
                          autoFocus: !0,
                          fullWidth: !0,
                          size: m.zxk.Sizes.SMALL,
                          onClick: this.handleAddFriendNavigation,
                          className: et.marginTop20,
                          children: $.intl.string($.t.w5uwoK)
                      })
                  ]
              });
    }
    renderSection() {
        return null;
    }
    renderInviteLink() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: i } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let r = null != t ? (0, A.Z)(t.code) : '',
            o = r.length > 0;
        return (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(m.vwX, {
                    tag: 'h5',
                    className: et.marginBottom8,
                    children: $.intl.string($.t.t3O2BQ)
                }),
                (0, l.jsx)(m.kO8, {
                    supportsCopy: V.wS,
                    placeholder: (0, A.Z)($.intl.string($.t.lPVBqK)),
                    value: o ? (n ? $.intl.string($.t['6HzNgY']) : r) : '',
                    buttonColor: m.zxk.Colors.BRAND,
                    text: o ? (i ? $.intl.string($.t.q30c5u) : $.intl.string($.t.OpuAlJ)) : $.intl.string($.t.qzxqUV),
                    mode: i ? m.uA3.SUCCESS : m.uA3.DEFAULT,
                    onCopy: () => {
                        o ? this.handleCopyInvite(r) : this.createInvite();
                    }
                }),
                r.length > 0
                    ? (0, l.jsx)(m.Text, {
                          variant: 'text-xs/normal',
                          className: s()(et.marginTop8, ee.footerText),
                          children: $.intl.format($.t.ZVdJMz, { numHours: ''.concat(24) })
                      })
                    : null
            ]
        });
    }
    renderFooter() {
        let { hasFriends: e, channel: t } = this.props;
        if (this.isNotFriends() || !e || this.isPartyFull()) return null;
        let n = null == t || t.isDM() ? this.renderCreateGroupButton() : this.renderInviteLink();
        if (null != n)
            return (0, l.jsx)(m.mzw, {
                className: ee.footer,
                children: n
            });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, l.jsxs)(m.Y0X, {
            transitionState: null != e ? e : m.Dvm.ENTERED,
            className: ee.popout,
            children: [
                this.renderHeader(),
                (0, l.jsxs)(m.hzk, {
                    children: [this.renderSearchBar(), this.renderBody()]
                }),
                this.renderFooter()
            ]
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            E.Z.sendRequest({
                discordTag: q.ZP.getUserTag(e, { identifiable: 'always' }),
                context: { location: 'Group DM' }
            });
    }
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                var t;
                let n = M.Z.getUserAffinity(e);
                return null !== (t = null == n ? void 0 : n.communicationProbability) && void 0 !== t ? t : -1;
            })
        };
    }
    constructor(...e) {
        super(...e),
            en(this, 'state', {
                separator: !1,
                copied: !1
            }),
            en(this, 'copyTimeout', void 0),
            en(this, 'scrollerRef', a.createRef()),
            en(this, 'searchBarRef', a.createRef()),
            en(this, '_mobileCloseRef', a.createRef()),
            en(this, '_searchCounter', 0),
            en(this, '_existingTimeout', null),
            en(this, 'scrollPageUp', () => {
                var e;
                null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
            }),
            en(this, 'scrollPageDown', () => {
                var e;
                null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
            }),
            en(this, 'renderMobileCloseButton', () =>
                (0, l.jsx)('div', {
                    className: s()(ee.mobileToolsContainer),
                    ref: this._mobileCloseRef,
                    children: (0, l.jsx)(m.JcV, {
                        containerRef: this._mobileCloseRef,
                        children: (0, l.jsx)('div', {
                            children: (0, l.jsx)(I.Z, {
                                className: ee.mobileToolsCloseIcon,
                                closeAction: this.props.onClose,
                                keybind: 'ESC'
                            })
                        })
                    })
                })
            ),
            en(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                let { results: n } = this.props;
                return null != n[t] ? 42 : 0;
            }),
            en(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: i, selectedUsers: a, selectedRow: r, hideDiscriminator: s } = this.props,
                    o = i[n];
                if (null == o) return null;
                let { user: c, comparator: d } = o,
                    u = a.has(c.id);
                return (0, l.jsx)(
                    J.Z,
                    {
                        row: n,
                        user: c,
                        hideDiscriminator: s,
                        comparator: d,
                        checked: u,
                        selected: n === r,
                        onClick: this.handleClick,
                        onMouseEnter: this.focusResult,
                        'aria-posinset': n + 1,
                        'aria-setsize': i.length
                    },
                    c.id
                );
            }),
            en(this, 'forceFocus', () => {
                let e = this.searchBarRef.current;
                null == e || e.focus();
            }),
            en(this, 'focusResult', (e) => {
                v.Z.select(e);
            }),
            en(this, 'handleSelect', (e, t) => {
                let { results: n, channel: i } = this.props;
                null == t ? v.Z.clear(null == i ? void 0 : i.id) : null != n && this.handleClick(n[t].user.id);
            }),
            en(this, 'handleSelectionChange', (e, t) => {
                v.Z.select(t);
                let n = this.scrollerRef.current;
                null != n &&
                    n.scrollToIndex({
                        section: e,
                        row: t,
                        padding: 8
                    });
            }),
            en(this, 'handleQueryChange', (e) => {
                let { channel: t } = this.props,
                    n = (0, N.v_)(t);
                v.Z.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        G.default.track(Q.rMx.SEARCH_USER_LIST_STARTED, {
                            ...n,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            search_query_length: e.length
                        }),
                            this._searchCounter++;
                    }, 500));
            }),
            en(this, 'handleRemoveUser', (e) => {
                let t = Array.from(this.props.selectedUsers);
                v.Z.removeUser(t[e]), this.forceFocus();
            }),
            en(this, 'handleClick', (e) => {
                let { selectedUsers: t, query: n, channel: i } = this.props;
                t.has(e) ? v.Z.removeUser(e) : (v.Z.addUser(e), n.length > 0 && v.Z.clear(null == i ? void 0 : i.id)), this.forceFocus();
            }),
            en(this, 'handleAddFriendNavigation', () => {
                (0, P.uL)(Q.Z5c.FRIENDS), C.Z.setSection(Q.pJs.ADD_FRIEND), this.props.onClose();
            }),
            en(this, 'handleScroll', () => {
                let e = this.scrollerRef.current;
                null != e && this.setState({ separator: !e.isScrolledToTop() });
            }),
            en(this, 'createNewDM', (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    i = (0, N.v_)(n),
                    l = !0;
                1 === e.length && (l = null == _.Z._openCachedDMChannel(e[0])),
                    G.default.track(Q.rMx.CREATE_DM_USER_LIST_CLICKED, {
                        ...i,
                        is_new_dm: l,
                        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                        recipient_ids: e,
                        num_searches: t,
                        affinity_score: this._getUserAffinities(e).affinities
                    }),
                    _.Z.openPrivateChannel(e, !1, !1, 'New Group DM');
            }),
            en(this, 'pushToExistingDM', (e, t) => {
                let n = this._searchCounter,
                    i = (0, N.v_)(e),
                    l = w.Z.getChannelId() === e.id;
                _.Z.addRecipients(e.id, t, Q.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (l) {
                        if (e.isDM() && n !== e.id) {
                            g.Z.call(n, !1, !0);
                            return;
                        }
                        g.Z.ring(n, t);
                    }
                }),
                    G.default.track(Q.rMx.CREATE_DM_USER_LIST_CLICKED, {
                        ...i,
                        is_new_dm: !0,
                        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                        recipient_ids: t,
                        num_searches: n,
                        affinity_score: this._getUserAffinities(t).affinities
                    });
            }),
            en(this, 'handleInviteUsers', () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    i = Array.from(t);
                if (null != e) {
                    let t = eu(Array.from(new Set([...e.recipients, ...i])));
                    t.size > 0
                        ? (0, m.h7j)(
                              (n) =>
                                  (0, l.jsx)(es, {
                                      ...n,
                                      onConfirm: () => this.pushToExistingDM(e, i),
                                      channelIds: t
                                  }),
                              {},
                              (0, m.VnL)(this.context.appContext)
                          )
                        : this.pushToExistingDM(e, i);
                } else {
                    let e = eu(i);
                    i.length > 1 && e.size > 0
                        ? (0, m.h7j)(
                              (t) =>
                                  (0, l.jsx)(es, {
                                      ...t,
                                      onConfirm: () => this.createNewDM(i),
                                      channelIds: e
                                  }),
                              {},
                              (0, m.VnL)(this.context.appContext)
                          )
                        : this.createNewDM(i);
                }
                n();
            }),
            en(this, 'handleCopyInvite', (e) => {
                let { channel: t, invite: n } = this.props;
                null != n && (0, V.JG)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({ copied: !0 }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({ copied: !1 });
                    }, 1000)),
                    G.default.track(Q.rMx.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: Q.Sbl.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null
                    });
            });
    }
}
function ec(e) {
    let { channel: t, ...n } = e,
        i = (0, p.cj)([D.Z, O.Z, F.Z], () => {
            let e;
            return (
                null != t && null != (e = O.Z.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...D.Z.getState(),
                    invite: e,
                    hideDiscriminator: F.Z.hidePersonalInformation,
                    hideInstantInvites: F.Z.hideInstantInvites
                }
            );
        });
    return (0, l.jsx)(eo, {
        channel: t,
        ...n,
        ...i
    });
}
function ed(e) {
    var t, n;
    let { channel: i, iconClassName: r, icon: s, tooltip: o, tooltipPosition: c = 'bottom', popoutPosition: d = 'bottom', popoutAlign: u = 'right', subscribeToGlobalHotkey: h = !1 } = e,
        [f, g] = a.useState(null != i && i.isGroupDM() && 0 === i.recipients.length),
        _ = a.useCallback(() => g((e) => !e), []);
    a.useEffect(
        () => (
            h && z.S.subscribe(Q.CkL.TOGGLE_DM_CREATE, _),
            () => {
                z.S.unsubscribe(Q.CkL.TOGGLE_DM_CREATE, _);
            }
        ),
        [h, _]
    );
    let C = (0, p.e7)([H.default], () => H.default.getUser(null == i ? void 0 : i.getRecipientId()));
    return (a.useEffect(() => {
        (0, R._)();
    }, []),
    (null !== (t = null == C ? void 0 : C.bot) && void 0 !== t && t) || (null !== (n = null == C ? void 0 : C.isProvisional) && void 0 !== n && n))
        ? null
        : (0, l.jsx)(m.yRy, {
              renderPopout: (e) =>
                  (0, l.jsx)(ec, {
                      ...e,
                      onClose: e.closePopout,
                      channel: i
                  }),
              position: d,
              shouldShow: f,
              align: u,
              onRequestClose: () => g(!1),
              animation: m.yRy.Animation.NONE,
              clickTrap: !0,
              children: (e) =>
                  (0, l.jsx)(X.ZP.Icon, {
                      ...e,
                      onClick: _,
                      icon: null != s ? s : null == i ? m.kL_ : m.ejJ,
                      className: r,
                      iconClassName: r,
                      tooltip: o,
                      tooltipPosition: c
                  })
          });
}
function eu(e) {
    let t = eh(e);
    return new Set(
        c()(k.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, L.bc)(e.type))
            .filter((e) => eh(e.recipients) === t)
            .map((e) => e.id)
            .value()
    );
}
function eh(e) {
    return JSON.stringify(e.sort());
}
en(eo, 'contextType', Z.ZP);
