n.d(t, { Z: () => eh }), n(230036), n(411104), n(653041), n(47120), n(301563), n(26686);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    c = n.n(s),
    u = n(913527),
    d = n.n(u),
    p = n(873546),
    h = n(442837),
    f = n(481060),
    m = n(570140),
    g = n(26151),
    b = n(493683),
    _ = n(529103),
    C = n(447543),
    v = n(708690),
    y = n(194359),
    x = n(425493),
    j = n(461745),
    O = n(40851),
    N = n(367907),
    E = n(43267),
    P = n(933557),
    I = n(600164),
    S = n(313201),
    Z = n(366980),
    T = n(703656),
    A = n(93127),
    w = n(752048),
    R = n(131704),
    k = n(592125),
    M = n(341165),
    L = n(544610),
    D = n(19780),
    W = n(306680),
    U = n(699516),
    B = n(246946),
    F = n(594174),
    H = n(626135),
    G = n(572004),
    V = n(585483),
    z = n(823379),
    q = n(709054),
    Y = n(51144),
    K = n(73752),
    X = n(665149),
    J = n(575464),
    Q = n(981631),
    $ = n(388032),
    ee = n(358183),
    et = n(455812);
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
function er(e) {
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
                en(e, t, n[t]);
            });
    }
    return e;
}
function ei(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function el(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let eo = (0, S.hQ)(),
    ea = (0, S.hQ)();
function es(e) {
    let { className: t, children: n } = e;
    return (0, i.jsxs)(I.Z, {
        align: I.Z.Align.CENTER,
        justify: I.Z.Justify.CENTER,
        direction: I.Z.Direction.VERTICAL,
        className: a()(ee.errorState, t),
        children: [(0, i.jsx)('div', { className: a()(ee.errorStateIcon, et.marginBottom20) }), n]
    });
}
let ec = (e) => {
        var t;
        let { channel: n, onClose: r } = e,
            l = null !== (t = (0, P.ZP)(n)) && void 0 !== t ? t : '',
            o = (0, h.e7)([W.ZP], () => {
                var e;
                return null !== (e = W.ZP.lastMessageId(n.id)) && void 0 !== e ? e : n.id;
            });
        return (0, i.jsx)(f.P3F, {
            onClick: () => {
                (0, T.XU)(Q.ME, n.id), r();
            },
            children: (0, i.jsxs)('div', {
                className: ee.confirmChannelItemContainer,
                children: [
                    (0, i.jsx)(f.qEK, {
                        src: (0, E.x)(n),
                        size: f.EFr.SIZE_24,
                        'aria-label': l
                    }),
                    (0, i.jsx)('span', {
                        className: ee.confirmChannelName,
                        children: l
                    }),
                    (0, i.jsx)('span', {
                        className: ee.lastActiveTimestamp,
                        children: d()(q.default.extractTimestamp(o)).fromNow()
                    })
                ]
            })
        });
    },
    eu = (e) => {
        var { onConfirm: t, channelIds: n } = e,
            r = el(e, ['onConfirm', 'channelIds']);
        let l = (0, h.Wu)([k.Z], () => Array.from(n).map(k.Z.getChannel), [n]);
        return (0, i.jsxs)(
            f.ConfirmModal,
            ei(
                er(
                    {
                        header: $.NW.string($.t.uFHxNT),
                        confirmText: $.NW.string($.t.KCNNJi),
                        cancelText: $.NW.string($.t['ETE/oK']),
                        onConfirm: t,
                        confirmButtonColor: f.zxk.Colors.BRAND
                    },
                    r
                ),
                {
                    children: [
                        (0, i.jsx)(f.Text, {
                            variant: 'text-md/normal',
                            children: $.NW.string($.t.rIsSqK)
                        }),
                        (0, i.jsx)(f.vwX, {
                            className: ee.selectExistingFormHeader,
                            children: $.NW.string($.t.cjE7wM)
                        }),
                        (0, i.jsx)(f.Ttm, {
                            className: ee.confirmInviteScroller,
                            children: l
                                .filter(z.lm)
                                .sort((e, t) => {
                                    var n, r;
                                    let i = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id,
                                        l = null !== (r = t.lastMessageId) && void 0 !== r ? r : t.id;
                                    return q.default.compare(l, i);
                                })
                                .map((e) =>
                                    (0, i.jsx)(
                                        ec,
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
class ed extends (r = l.PureComponent) {
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
        m.Z.wait(() => v.Z.open(null == e ? void 0 : e.id));
        let t = (0, N.v_)(e);
        H.default.track(
            Q.rMx.OPEN_POPOUT,
            ei(er({}, t), {
                type: this._getAnalyticsEntryPoint().entryPointType,
                source: this._getAnalyticsEntryPoint().entryPointSource,
                is_friend: !this.isNotFriends()
            })
        ),
            V.S.subscribe(Q.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            V.S.subscribe(Q.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        V.S.unsubscribe(Q.CkL.SCROLL_PAGE_UP, this.scrollPageUp), V.S.unsubscribe(Q.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), m.Z.wait(() => v.Z.close());
    }
    isNotFriends() {
        let { channel: e } = this.props;
        if (null == e || !e.isDM()) return !1;
        let t = e.getRecipientId();
        if (null == t) throw Error('no recipient in DM');
        return !U.Z.isFriend(t);
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = K.Z.getCurrentConfig({ location: '5326c5_1' }, { autoTrackExposure: !1 });
        C.Z.createInvite(e.id, { max_age: t }, Q.t4x.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = F.default.getCurrentUser();
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
            r = (null != e && 0 === t.size) || n < 0,
            l = t.size > 1 ? $.NW.string($.t.ZGMNAw) : $.NW.string($.t['6Urw1t']);
        return (0, i.jsx)(f.zxk, {
            fullWidth: !0,
            disabled: r,
            onClick: this.handleInviteUsers,
            children: l
        });
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            r = 0 === t.size || n < 0;
        return (0, i.jsx)('div', {
            className: ee.addButton,
            children: (0, i.jsx)(f.zxk, {
                size: f.zxk.Sizes.SMALL,
                disabled: r,
                onClick: this.handleInviteUsers,
                children: $.NW.string($.t.OYkgVl)
            })
        });
    }
    renderSubtitle() {
        if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
        let e = this.getRemaining(),
            t = e <= 0 ? $.NW.formatToPlainString($.t.xYr009, { number: this.getMaxParticipants() }) : $.NW.formatToPlainString($.t.HrSDPD, { number: e });
        return (0, i.jsx)(f.Text, {
            variant: 'text-xs/normal',
            className: a()(ee.subtitle, { [ee.subtitleWarning]: e < 0 }, et.marginTop4),
            children: t
        });
    }
    renderSearchBar() {
        var e;
        let { query: t, hasFriends: n, results: r, selectedRow: l, selectedUsers: o } = this.props;
        if (!n || this.isNotFriends()) return null;
        let s = [];
        return (
            o.forEach((e) => {
                let t = F.default.getUser(e);
                null != t && s.push(Y.ZP.getName(t));
            }),
            (0, i.jsxs)(I.Z, {
                className: a()(ee.searchBar),
                children: [
                    (0, i.jsx)(j.ZP, {
                        ref: this.searchBarRef,
                        className: ee.searchBarComponent,
                        autoFocus: !0,
                        placeholder: 0 === o.size ? $.NW.string($.t.Wxnb6u) : void 0,
                        disabled: this.isPartyFull(),
                        size: j.ZP.Sizes.MEDIUM,
                        query: t,
                        selectedRow: l,
                        sections: [null !== (e = null == r ? void 0 : r.length) && void 0 !== e ? e : 0],
                        tags: s,
                        onSelect: this.handleSelect,
                        onSelectionChange: this.handleSelectionChange,
                        onQueryChange: this.handleQueryChange,
                        onRemoveTag: this.handleRemoveUser,
                        inputProps: {
                            'aria-labelledby': eo,
                            'aria-controls': ea,
                            'aria-expanded': !0,
                            'aria-activedescendant': 'user-row-'.concat(l),
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
            t = this.isNotFriends() ? $.NW.string($.t.Xjlbvr) : $.NW.string($.t.CdNhGR);
        return (0, i.jsxs)(f.xBx, {
            direction: I.Z.Direction.VERTICAL,
            align: I.Z.Align.STRETCH,
            className: ee.header,
            separator: e,
            children: [
                p.tq ? this.renderMobileCloseButton() : null,
                (0, i.jsx)(f.X6q, {
                    id: eo,
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
            let n = F.default.getUser(t),
                r = null != n ? n.username : '',
                l = null != n && U.Z.getRelationshipType(n.id) === Q.OGo.PENDING_OUTGOING;
            return (0, i.jsxs)(es, {
                className: ee.notFriends,
                children: [
                    (0, i.jsx)(f.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: $.NW.format($.t['eg+R9/'], { username: r })
                    }),
                    (0, i.jsx)(f.zxk, {
                        disabled: l,
                        size: f.zxk.Sizes.SMALL,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                        className: et.marginTop20,
                        children: l ? $.NW.string($.t.xMH6vL) : $.NW.string($.t['PMsq/f'])
                    })
                ]
            });
        }
        return t
            ? this.isPartyFull()
                ? (0, i.jsxs)(es, {
                      className: ee.partyFull,
                      children: [(0, i.jsx)('div', { children: $.NW.string($.t.OtTQDw) }), (0, i.jsx)('div', { children: $.NW.format($.t.xYr009, { number: this.getMaxParticipants() }) })]
                  })
                : 0 === n.length
                  ? (0, i.jsx)(es, {
                        className: a()(ee.noResults, et.marginBottom20),
                        children: (0, i.jsx)('div', { children: $.NW.string($.t.SV4DJy) })
                    })
                  : (0, i.jsx)(f.aVo, {
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
                        innerId: ea,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: 'vertical'
                    })
            : (0, i.jsxs)(es, {
                  className: ee.noFriends,
                  children: [
                      (0, i.jsx)('div', { children: $.NW.string($.t['7orY6O']) }),
                      (0, i.jsx)(f.zxk, {
                          autoFocus: !0,
                          fullWidth: !0,
                          size: f.zxk.Sizes.SMALL,
                          onClick: this.handleAddFriendNavigation,
                          className: et.marginTop20,
                          children: $.NW.string($.t.w5uwoK)
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
        let o = null != t ? (0, Z.Z)(t.code) : '',
            s = o.length > 0;
        return (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(f.vwX, {
                    tag: 'h5',
                    className: et.marginBottom8,
                    children: $.NW.string($.t.t3O2BQ)
                }),
                (0, i.jsx)(f.kO8, {
                    supportsCopy: G.wS,
                    placeholder: (0, Z.Z)($.NW.string($.t.lPVBqK)),
                    value: s ? (n ? $.NW.string($.t['6HzNgY']) : o) : '',
                    buttonColor: f.zxk.Colors.BRAND,
                    text: s ? (r ? $.NW.string($.t.q30c5u) : $.NW.string($.t.OpuAlJ)) : $.NW.string($.t.qzxqUV),
                    mode: r ? f.uA3.SUCCESS : f.uA3.DEFAULT,
                    onCopy: () => {
                        s ? this.handleCopyInvite(o) : this.createInvite();
                    }
                }),
                o.length > 0
                    ? (0, i.jsx)(f.Text, {
                          variant: 'text-xs/normal',
                          className: a()(et.marginTop8, ee.footerText),
                          children: $.NW.format($.t.ZVdJMz, { numHours: ''.concat(24) })
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
            return (0, i.jsx)(f.mzw, {
                className: ee.footer,
                children: n
            });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, i.jsxs)(f.Y0X, {
            transitionState: null != e ? e : f.Dvm.ENTERED,
            className: ee.popout,
            children: [
                this.renderHeader(),
                (0, i.jsxs)(f.hzk, {
                    children: [this.renderSearchBar(), this.renderBody()]
                }),
                this.renderFooter()
            ]
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            y.Z.sendRequest({
                discordTag: Y.ZP.getUserTag(e, { identifiable: 'always' }),
                context: { location: 'Group DM' }
            });
    }
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                var t;
                let n = w.Z.getUserAffinity(e);
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
            en(this, 'scrollerRef', l.createRef()),
            en(this, 'searchBarRef', l.createRef()),
            en(this, '_mobileCloseRef', l.createRef()),
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
                (0, i.jsx)('div', {
                    className: a()(ee.mobileToolsContainer),
                    ref: this._mobileCloseRef,
                    children: (0, i.jsx)(f.JcV, {
                        containerRef: this._mobileCloseRef,
                        children: (0, i.jsx)('div', {
                            children: (0, i.jsx)(x.Z, {
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
                return 42 * (null != n[t]);
            }),
            en(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: r, selectedUsers: l, selectedRow: o, hideDiscriminator: a } = this.props,
                    s = r[n];
                if (null == s) return null;
                let { user: c, comparator: u } = s,
                    d = l.has(c.id);
                return (0, i.jsx)(
                    J.Z,
                    {
                        row: n,
                        user: c,
                        hideDiscriminator: a,
                        comparator: u,
                        checked: d,
                        selected: n === o,
                        onClick: this.handleClick,
                        onMouseEnter: this.focusResult,
                        'aria-posinset': n + 1,
                        'aria-setsize': r.length
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
                let { results: n, channel: r } = this.props;
                null == t ? v.Z.clear(null == r ? void 0 : r.id) : null != n && this.handleClick(n[t].user.id);
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
                        H.default.track(
                            Q.rMx.SEARCH_USER_LIST_STARTED,
                            ei(er({}, n), {
                                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                                search_query_length: e.length
                            })
                        ),
                            this._searchCounter++;
                    }, 500));
            }),
            en(this, 'handleRemoveUser', (e) => {
                let t = Array.from(this.props.selectedUsers);
                v.Z.removeUser(t[e]), this.forceFocus();
            }),
            en(this, 'handleClick', (e) => {
                let { selectedUsers: t, query: n, channel: r } = this.props;
                t.has(e) ? v.Z.removeUser(e) : (v.Z.addUser(e), n.length > 0 && v.Z.clear(null == r ? void 0 : r.id)), this.forceFocus();
            }),
            en(this, 'handleAddFriendNavigation', () => {
                (0, T.uL)(Q.Z5c.FRIENDS), _.Z.setSection(Q.pJs.ADD_FRIEND), this.props.onClose();
            }),
            en(this, 'handleScroll', () => {
                let e = this.scrollerRef.current;
                null != e && this.setState({ separator: !e.isScrolledToTop() });
            }),
            en(this, 'createNewDM', (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    r = (0, N.v_)(n),
                    i = !0;
                1 === e.length && (i = null == b.Z._openCachedDMChannel(e[0])),
                    H.default.track(
                        Q.rMx.CREATE_DM_USER_LIST_CLICKED,
                        ei(er({}, r), {
                            is_new_dm: i,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: e,
                            num_searches: t,
                            affinity_score: this._getUserAffinities(e).affinities
                        })
                    ),
                    b.Z.openPrivateChannel(e, !1, !1, 'New Group DM');
            }),
            en(this, 'pushToExistingDM', (e, t) => {
                let n = this._searchCounter,
                    r = (0, N.v_)(e),
                    i = D.Z.getChannelId() === e.id;
                b.Z.addRecipients(e.id, t, Q.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (i) {
                        if (e.isDM() && n !== e.id) {
                            g.Z.call(n, !1, !0);
                            return;
                        }
                        g.Z.ring(n, t);
                    }
                }),
                    H.default.track(
                        Q.rMx.CREATE_DM_USER_LIST_CLICKED,
                        ei(er({}, r), {
                            is_new_dm: !0,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: t,
                            num_searches: n,
                            affinity_score: this._getUserAffinities(t).affinities
                        })
                    );
            }),
            en(this, 'handleInviteUsers', () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    r = Array.from(t);
                if (null != e) {
                    let t = ef(Array.from(new Set([...e.recipients, ...r])));
                    t.size > 0
                        ? (0, f.h7j)(
                              (n) =>
                                  (0, i.jsx)(
                                      eu,
                                      ei(er({}, n), {
                                          onConfirm: () => this.pushToExistingDM(e, r),
                                          channelIds: t
                                      })
                                  ),
                              {},
                              (0, f.VnL)(this.context.appContext)
                          )
                        : this.pushToExistingDM(e, r);
                } else {
                    let e = ef(r);
                    r.length > 1 && e.size > 0
                        ? (0, f.h7j)(
                              (t) =>
                                  (0, i.jsx)(
                                      eu,
                                      ei(er({}, t), {
                                          onConfirm: () => this.createNewDM(r),
                                          channelIds: e
                                      })
                                  ),
                              {},
                              (0, f.VnL)(this.context.appContext)
                          )
                        : this.createNewDM(r);
                }
                n();
            }),
            en(this, 'handleCopyInvite', (e) => {
                let { channel: t, invite: n } = this.props;
                null != n && (0, G.JG)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({ copied: !0 }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({ copied: !1 });
                    }, 1000)),
                    H.default.track(Q.rMx.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: Q.Sbl.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null
                    });
            });
    }
}
function ep(e) {
    var { channel: t } = e,
        n = el(e, ['channel']);
    let r = (0, h.cj)([L.Z, M.Z, B.Z], () => {
        let e;
        return (
            null != t && null != (e = M.Z.getInvite(t.id)) && e.isExpired() && (e = null),
            ei(er({}, L.Z.getState()), {
                invite: e,
                hideDiscriminator: B.Z.hidePersonalInformation,
                hideInstantInvites: B.Z.hideInstantInvites
            })
        );
    });
    return (0, i.jsx)(ed, er({ channel: t }, n, r));
}
function eh(e) {
    var t, n;
    let { channel: r, iconClassName: o, icon: a, tooltip: s, tooltipPosition: c = 'bottom', popoutPosition: u = 'bottom', popoutAlign: d = 'right', subscribeToGlobalHotkey: p = !1 } = e,
        [m, g] = l.useState(null != r && r.isGroupDM() && 0 === r.recipients.length),
        b = l.useCallback(() => g((e) => !e), []);
    l.useEffect(
        () => (
            p && V.S.subscribe(Q.CkL.TOGGLE_DM_CREATE, b),
            () => {
                V.S.unsubscribe(Q.CkL.TOGGLE_DM_CREATE, b);
            }
        ),
        [p, b]
    );
    let _ = (0, h.e7)([F.default], () => F.default.getUser(null == r ? void 0 : r.getRecipientId()));
    return (l.useEffect(() => {
        (0, A._)();
    }, []),
    (null !== (t = null == _ ? void 0 : _.bot) && void 0 !== t && t) || (null !== (n = null == _ ? void 0 : _.isProvisional) && void 0 !== n && n))
        ? null
        : (0, i.jsx)(f.yRy, {
              renderPopout: (e) =>
                  (0, i.jsx)(
                      ep,
                      ei(er({}, e), {
                          onClose: e.closePopout,
                          channel: r
                      })
                  ),
              position: u,
              shouldShow: m,
              align: d,
              onRequestClose: () => g(!1),
              animation: f.yRy.Animation.NONE,
              clickTrap: !0,
              children: (e) =>
                  (0, i.jsx)(
                      X.ZP.Icon,
                      ei(er({}, e), {
                          onClick: b,
                          icon: null != a ? a : null == r ? f.kL_ : f.ejJ,
                          className: o,
                          iconClassName: o,
                          tooltip: s,
                          tooltipPosition: c
                      })
                  )
          });
}
function ef(e) {
    let t = em(e);
    return new Set(
        c()(k.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, R.bc)(e.type))
            .filter((e) => em(e.recipients) === t)
            .map((e) => e.id)
            .value()
    );
}
function em(e) {
    return JSON.stringify(e.sort());
}
en(ed, 'contextType', O.ZP);
