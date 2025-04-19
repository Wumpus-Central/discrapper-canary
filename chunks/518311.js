n.d(t, {
    Z: () => e_,
    l: () => ey
}),
    n(642613),
    n(415506),
    n(539854),
    n(388685),
    n(35282),
    n(49124);
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
    y = n(447543),
    C = n(708690),
    x = n(194359),
    v = n(425493),
    j = n(461745),
    O = n(40851),
    E = n(100527),
    N = n(367907),
    I = n(906732),
    P = n(43267),
    S = n(933557),
    Z = n(600164),
    T = n(313201),
    A = n(429090),
    w = n(912114),
    R = n(366980),
    k = n(703656),
    M = n(93127),
    L = n(752048),
    D = n(131704),
    W = n(592125),
    U = n(341165),
    B = n(544610),
    G = n(19780),
    F = n(306680),
    H = n(699516),
    V = n(246946),
    z = n(594174),
    Y = n(626135),
    q = n(572004),
    K = n(585483),
    X = n(823379),
    Q = n(709054),
    J = n(51144),
    $ = n(73752),
    ee = n(665149),
    et = n(575464),
    en = n(981631),
    er = n(388032),
    ei = n(382314),
    el = n(20493);
function eo(e, t, n) {
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
function ea(e) {
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
                eo(e, t, n[t]);
            });
    }
    return e;
}
function es(e, t) {
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
function ec(e, t) {
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
let eu = (0, T.hQ)(),
    ed = (0, T.hQ)();
function ep(e) {
    let { className: t, children: n } = e;
    return (0, i.jsxs)(Z.Z, {
        align: Z.Z.Align.CENTER,
        justify: Z.Z.Justify.CENTER,
        direction: Z.Z.Direction.VERTICAL,
        className: a()(ei.errorState, t),
        children: [(0, i.jsx)('div', { className: a()(ei.errorStateIcon, el.marginBottom20) }), n]
    });
}
let eh = (e) => {
        var t;
        let { channel: n, onClose: r } = e,
            l = null != (t = (0, S.ZP)(n)) ? t : '',
            o = (0, h.e7)([F.ZP], () => {
                var e;
                return null != (e = F.ZP.lastMessageId(n.id)) ? e : n.id;
            });
        return (0, i.jsx)(f.P3F, {
            onClick: () => {
                (0, k.XU)(en.ME, n.id), r();
            },
            children: (0, i.jsxs)('div', {
                className: ei.confirmChannelItemContainer,
                children: [
                    (0, i.jsx)(f.qEK, {
                        src: (0, P.x)(n),
                        size: f.EFr.SIZE_24,
                        'aria-label': l
                    }),
                    (0, i.jsx)('span', {
                        className: ei.confirmChannelName,
                        children: l
                    }),
                    (0, i.jsx)('span', {
                        className: ei.lastActiveTimestamp,
                        children: d()(Q.default.extractTimestamp(o)).fromNow()
                    })
                ]
            })
        });
    },
    ef = (e) => {
        var { onConfirm: t, channelIds: n } = e,
            r = ec(e, ['onConfirm', 'channelIds']);
        let l = (0, h.Wu)([W.Z], () => Array.from(n).map(W.Z.getChannel), [n]);
        return (0, i.jsxs)(
            f.ConfirmModal,
            es(
                ea(
                    {
                        header: er.NW.string(er.t.uFHxNT),
                        confirmText: er.NW.string(er.t.KCNNJi),
                        cancelText: er.NW.string(er.t['ETE/oK']),
                        onConfirm: t,
                        confirmButtonColor: f.zxk.Colors.BRAND
                    },
                    r
                ),
                {
                    children: [
                        (0, i.jsx)(f.Text, {
                            variant: 'text-md/normal',
                            children: er.NW.string(er.t.rIsSqK)
                        }),
                        (0, i.jsx)(f.vwX, {
                            className: ei.selectExistingFormHeader,
                            children: er.NW.string(er.t.cjE7wM)
                        }),
                        (0, i.jsx)(f.Ttm, {
                            className: ei.confirmInviteScroller,
                            children: l
                                .filter(X.lm)
                                .sort((e, t) => {
                                    var n, r;
                                    let i = null != (n = e.lastMessageId) ? n : e.id,
                                        l = null != (r = t.lastMessageId) ? r : t.id;
                                    return Q.default.compare(l, i);
                                })
                                .map((e) =>
                                    (0, i.jsx)(
                                        eh,
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
class em extends (r = l.PureComponent) {
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
        m.Z.wait(() => C.Z.open(null == e ? void 0 : e.id));
        let t = (0, N.v_)(e);
        Y.default.track(
            en.rMx.OPEN_POPOUT,
            es(ea({}, t), {
                type: this._getAnalyticsEntryPoint().entryPointType,
                source: this._getAnalyticsEntryPoint().entryPointSource,
                is_friend: !this.isNotFriends()
            })
        ),
            K.S.subscribe(en.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            K.S.subscribe(en.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        K.S.unsubscribe(en.CkL.SCROLL_PAGE_UP, this.scrollPageUp), K.S.unsubscribe(en.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), m.Z.wait(() => C.Z.close());
    }
    isNotFriends() {
        let { channel: e } = this.props;
        if (null == e || !e.isDM()) return !1;
        let t = e.getRecipientId();
        if (null == t) throw Error('no recipient in DM');
        return !H.Z.isFriend(t);
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = $.Z.getCurrentConfig({ location: '5326c5_1' }, { autoTrackExposure: !1 });
        y.ZP.createInvite(e.id, { max_age: t }, en.t4x.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = z.default.getCurrentUser();
        return null != t && t.isStaff() ? en.p3w : null != e && e.userLimit > 0 ? e.userLimit : en.pAY;
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
            l = t.size > 1 ? er.NW.string(er.t.ZGMNAw) : er.NW.string(er.t['6Urw1t']);
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
            className: ei.addButton,
            children: (0, i.jsx)(f.zxk, {
                size: f.zxk.Sizes.SMALL,
                disabled: r,
                onClick: this.handleInviteUsers,
                children: er.NW.string(er.t.OYkgVl)
            })
        });
    }
    renderSubtitle() {
        if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
        let e = this.getRemaining(),
            t = e <= 0 ? er.NW.formatToPlainString(er.t.xYr009, { number: this.getMaxParticipants() }) : er.NW.formatToPlainString(er.t.HrSDPD, { number: e });
        return (0, i.jsx)(f.Text, {
            variant: 'text-xs/normal',
            className: a()(ei.subtitle, { [ei.subtitleWarning]: e < 0 }, el.marginTop4),
            children: t
        });
    }
    renderSearchBar() {
        var e;
        let { query: t, hasFriends: n, results: r, selectedRow: l, selectedUsers: o } = this.props;
        if (!n || this.isNotFriends()) return null;
        let a = [];
        return (
            o.forEach((e) => {
                let t = z.default.getUser(e);
                null != t && a.push(J.ZP.getName(t));
            }),
            (0, i.jsxs)(Z.Z, {
                className: ei.searchBar,
                children: [
                    (0, i.jsx)(j.ZP, {
                        ref: this.searchBarRef,
                        className: ei.searchBarComponent,
                        autoFocus: !0,
                        placeholder: 0 === o.size ? er.NW.string(er.t.Wxnb6u) : void 0,
                        disabled: this.isPartyFull(),
                        size: j.ZP.Sizes.MEDIUM,
                        query: t,
                        selectedRow: l,
                        sections: [null != (e = null == r ? void 0 : r.length) ? e : 0],
                        tags: a,
                        onSelect: this.handleSelect,
                        onSelectionChange: this.handleSelectionChange,
                        onQueryChange: this.handleQueryChange,
                        onRemoveTag: this.handleRemoveUser,
                        inputProps: {
                            'aria-labelledby': eu,
                            'aria-controls': ed,
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
            t = this.isNotFriends() ? er.NW.string(er.t.Xjlbvr) : er.NW.string(er.t.CdNhGR);
        return (0, i.jsxs)(f.xBx, {
            direction: Z.Z.Direction.VERTICAL,
            align: Z.Z.Align.STRETCH,
            className: ei.header,
            separator: e,
            children: [
                p.tq ? this.renderMobileCloseButton() : null,
                (0, i.jsx)(f.X6q, {
                    id: eu,
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
            let n = z.default.getUser(t),
                r = null != n ? n.username : '',
                l = null != n && H.Z.getRelationshipType(n.id) === en.OGo.PENDING_OUTGOING;
            return (0, i.jsxs)(ep, {
                className: ei.notFriends,
                children: [
                    (0, i.jsx)(f.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: er.NW.format(er.t['eg+R9/'], { username: r })
                    }),
                    (0, i.jsx)(f.zxk, {
                        disabled: l,
                        size: f.zxk.Sizes.SMALL,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                        className: el.marginTop20,
                        children: l ? er.NW.string(er.t.xMH6vL) : er.NW.string(er.t['PMsq/f'])
                    })
                ]
            });
        }
        return t
            ? this.isPartyFull()
                ? (0, i.jsxs)(ep, {
                      className: ei.partyFull,
                      children: [(0, i.jsx)('div', { children: er.NW.string(er.t.OtTQDw) }), (0, i.jsx)('div', { children: er.NW.format(er.t.xYr009, { number: this.getMaxParticipants() }) })]
                  })
                : 0 === n.length
                  ? (0, i.jsx)(ep, {
                        className: a()(ei.noResults, el.marginBottom20),
                        children: (0, i.jsx)('div', { children: er.NW.string(er.t.SV4DJy) })
                    })
                  : (0, i.jsx)(f.aVo, {
                        ref: this.scrollerRef,
                        sections: [n.length],
                        className: ei.scroller,
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
                        innerId: ed,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: 'vertical'
                    })
            : (0, i.jsxs)(ep, {
                  className: ei.noFriends,
                  children: [
                      (0, i.jsx)('div', { children: er.NW.string(er.t['7orY6O']) }),
                      (0, i.jsx)(f.zxk, {
                          autoFocus: !0,
                          fullWidth: !0,
                          size: f.zxk.Sizes.SMALL,
                          onClick: this.handleAddFriendNavigation,
                          className: el.marginTop20,
                          children: er.NW.string(er.t.w5uwoK)
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
        let o = null != t ? (0, R.Z)(t.code) : '',
            s = o.length > 0;
        return (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(f.vwX, {
                    tag: 'h5',
                    className: el.marginBottom8,
                    children: er.NW.string(er.t.t3O2BQ)
                }),
                (0, i.jsx)(f.kO8, {
                    supportsCopy: q.wS,
                    placeholder: (0, R.Z)(er.NW.string(er.t.lPVBqK)),
                    value: s ? (n ? er.NW.string(er.t['6HzNgY']) : o) : '',
                    buttonColor: f.zxk.Colors.BRAND,
                    text: s ? (r ? er.NW.string(er.t.q30c5u) : er.NW.string(er.t.OpuAlJ)) : er.NW.string(er.t.qzxqUV),
                    mode: r ? f.uA3.SUCCESS : f.uA3.DEFAULT,
                    onCopy: () => {
                        s ? this.handleCopyInvite(o) : this.createInvite();
                    }
                }),
                o.length > 0
                    ? (0, i.jsx)(f.Text, {
                          variant: 'text-xs/normal',
                          className: a()(el.marginTop8, ei.footerText),
                          children: er.NW.format(er.t.ZVdJMz, { numHours: ''.concat(24) })
                      })
                    : null
            ]
        });
    }
    renderFooter() {
        let { hasFriends: e, channel: t, selectedUsers: n } = this.props;
        if (this.isNotFriends() || !e || this.isPartyFull()) return null;
        if (null == t)
            return (0, i.jsxs)(f.mzw, {
                className: ei.footer,
                children: [
                    n.size > 1 &&
                        (0, i.jsx)(eg, {
                            previewIcon: this.state.previewIcon,
                            selectedUsers: n,
                            channelName: this.state.newChannelName,
                            onChange: this.handleChannelNameChange,
                            onIconChange: this.handleIconChange,
                            onIconRemove: this.handleIconRemove
                        }),
                    this.renderCreateGroupButton()
                ]
            });
        let r = t.isDM() ? this.renderCreateGroupButton() : this.renderInviteLink();
        if (null != r)
            return (0, i.jsx)(f.mzw, {
                className: ei.footer,
                children: r
            });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, i.jsxs)(f.Y0X, {
            transitionState: null != e ? e : f.Dvm.ENTERED,
            className: ei.popout,
            fullscreenOnMobile: !1,
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
            x.Z.sendRequest({
                discordTag: J.ZP.getUserTag(e, { identifiable: 'always' }),
                context: { location: 'Group DM' }
            });
    }
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                var t;
                let n = L.Z.getUserAffinity(e);
                return null != (t = null == n ? void 0 : n.communicationProbability) ? t : -1;
            })
        };
    }
    constructor(...e) {
        super(...e),
            eo(this, 'state', {
                separator: !1,
                copied: !1,
                newChannelName: '',
                previewIcon: void 0
            }),
            eo(this, 'copyTimeout', void 0),
            eo(this, 'scrollerRef', l.createRef()),
            eo(this, 'searchBarRef', l.createRef()),
            eo(this, '_mobileCloseRef', l.createRef()),
            eo(this, '_searchCounter', 0),
            eo(this, '_existingTimeout', null),
            eo(this, 'scrollPageUp', () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollPageUp({ animate: !0 });
            }),
            eo(this, 'scrollPageDown', () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollPageDown({ animate: !0 });
            }),
            eo(this, 'renderMobileCloseButton', () =>
                (0, i.jsx)('div', {
                    className: ei.mobileToolsContainer,
                    ref: this._mobileCloseRef,
                    children: (0, i.jsx)(f.JcV, {
                        containerRef: this._mobileCloseRef,
                        children: (0, i.jsx)('div', {
                            children: (0, i.jsx)(v.Z, {
                                className: ei.mobileToolsCloseIcon,
                                closeAction: this.props.onClose,
                                keybind: 'ESC'
                            })
                        })
                    })
                })
            ),
            eo(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                let { results: n } = this.props;
                return 42 * (null != n[t]);
            }),
            eo(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: r, selectedUsers: l, selectedRow: o, hideDiscriminator: a } = this.props,
                    s = r[n];
                if (null == s) return null;
                let { user: c, comparator: u } = s,
                    d = l.has(c.id);
                return (0, i.jsx)(
                    et.Z,
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
            eo(this, 'forceFocus', () => {
                let e = this.searchBarRef.current;
                null == e || e.focus();
            }),
            eo(this, 'focusResult', (e) => {
                C.Z.select(e);
            }),
            eo(this, 'handleSelect', (e, t) => {
                let { results: n, channel: r } = this.props;
                null == t ? C.Z.clear(null == r ? void 0 : r.id) : null != n && this.handleClick(n[t].user.id);
            }),
            eo(this, 'handleSelectionChange', (e, t) => {
                C.Z.select(t);
                let n = this.scrollerRef.current;
                null != n &&
                    n.scrollToIndex({
                        section: e,
                        row: t,
                        padding: 8
                    });
            }),
            eo(this, 'handleQueryChange', (e) => {
                let { channel: t } = this.props,
                    n = (0, N.v_)(t);
                C.Z.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        Y.default.track(
                            en.rMx.SEARCH_USER_LIST_STARTED,
                            es(ea({}, n), {
                                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                                search_query_length: e.length
                            })
                        ),
                            this._searchCounter++;
                    }, 500));
            }),
            eo(this, 'handleRemoveUser', (e) => {
                let t = Array.from(this.props.selectedUsers);
                C.Z.removeUser(t[e]), this.forceFocus();
            }),
            eo(this, 'handleClick', (e) => {
                let { selectedUsers: t, query: n, channel: r } = this.props;
                t.has(e) ? C.Z.removeUser(e) : (C.Z.addUser(e), n.length > 0 && C.Z.clear(null == r ? void 0 : r.id)), this.forceFocus();
            }),
            eo(this, 'handleAddFriendNavigation', () => {
                (0, k.uL)(en.Z5c.FRIENDS), _.Z.setSection(en.pJs.ADD_FRIEND), this.props.onClose();
            }),
            eo(this, 'handleScroll', () => {
                let e = this.scrollerRef.current;
                null != e && this.setState({ separator: !e.isScrolledToTop() });
            }),
            eo(this, 'handleChannelNameChange', (e) => {
                this.setState({ newChannelName: e });
            }),
            eo(this, 'handleIconChange', (e) => {
                let { imageUri: t } = e;
                this.setState({ previewIcon: t });
            }),
            eo(this, 'handleIconRemove', () => {
                this.setState({ previewIcon: null });
            }),
            eo(this, 'createNewDM', (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    r = (0, N.v_)(n),
                    i = !0;
                1 === e.length && (i = null == b.Z._openCachedDMChannel(e[0])),
                    Y.default.track(
                        en.rMx.CREATE_DM_USER_LIST_CLICKED,
                        es(ea({}, r), {
                            is_new_dm: i,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: e,
                            num_searches: t,
                            affinity_score: this._getUserAffinities(e).affinities
                        })
                    ),
                    b.Z.openPrivateChannel({
                        recipientIds: e,
                        location: 'New Group DM'
                    }).then((e) => {
                        '' !== this.state.newChannelName && b.Z.setName(e, this.state.newChannelName), null != this.state.previewIcon && b.Z.setIcon(e, this.state.previewIcon, E.Z.NEW_GROUP_DM_INVITE_MODAL);
                    });
            }),
            eo(this, 'pushToExistingDM', (e, t) => {
                let n = this._searchCounter,
                    r = (0, N.v_)(e),
                    i = G.Z.getChannelId() === e.id;
                b.Z.addRecipients(e.id, t, en.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (i) {
                        if (e.isDM() && n !== e.id) return void g.Z.call(n, !1, !0);
                        g.Z.ring(n, t);
                    }
                }),
                    Y.default.track(
                        en.rMx.CREATE_DM_USER_LIST_CLICKED,
                        es(ea({}, r), {
                            is_new_dm: !0,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: t,
                            num_searches: n,
                            affinity_score: this._getUserAffinities(t).affinities
                        })
                    );
            }),
            eo(this, 'handleInviteUsers', () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    r = Array.from(t);
                if (null != e) {
                    let t = eC(Array.from(new Set([...e.recipients, ...r])));
                    t.size > 0
                        ? (0, f.h7j)(
                              (n) =>
                                  (0, i.jsx)(
                                      ef,
                                      es(ea({}, n), {
                                          onConfirm: () => this.pushToExistingDM(e, r),
                                          channelIds: t
                                      })
                                  ),
                              {},
                              (0, f.VnL)(this.context.appContext)
                          )
                        : this.pushToExistingDM(e, r);
                } else {
                    let e = eC(r);
                    r.length > 1 && e.size > 0
                        ? (0, f.h7j)(
                              (t) =>
                                  (0, i.jsx)(
                                      ef,
                                      es(ea({}, t), {
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
            eo(this, 'handleCopyInvite', (e) => {
                let { channel: t, invite: n } = this.props;
                null != n && (0, q.JG)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({ copied: !0 }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({ copied: !1 });
                    }, 1000)),
                    Y.default.track(en.rMx.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: en.Sbl.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null
                    });
            });
    }
}
function eg(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: l, onIconRemove: o, onChange: a } = e,
        { analyticsLocations: s } = (0, I.ZP)(E.Z.NEW_GROUP_DM_INVITE_MODAL);
    if (!(0, A.a)(E.Z.NEW_GROUP_DM_INVITE_MODAL)) return null;
    let c = (0, S.pT)(Array.from(t), z.default, H.Z);
    return (0, i.jsxs)('div', {
        className: ei.customizationContainer,
        children: [
            (0, i.jsx)(w.B, {
                className: ei.iconSelector,
                channel: null,
                previewIcon: r,
                onIconChange: l,
                onIconRemove: o,
                analyticsLocations: s,
                petite: !0,
                allowRemovingIcon: !1
            }),
            (0, i.jsx)(f.Text, {
                className: ei.channelNameLabel,
                variant: 'text-sm/medium',
                color: 'header-muted',
                children: er.NW.string(er.t.YynaLC)
            }),
            (0, i.jsx)(f.oil, {
                'aria-label': er.NW.string(er.t.YynaLC),
                className: ei.channelNameInput,
                placeholder: c,
                value: n,
                onChange: a
            })
        ]
    });
}
function eb(e) {
    var { channel: t } = e,
        n = ec(e, ['channel']);
    let r = (0, h.cj)([B.Z, U.Z, V.Z], () => {
        let e;
        return (
            null != t && null != (e = U.Z.getInvite(t.id)) && e.isExpired() && (e = null),
            es(ea({}, B.Z.getState()), {
                invite: e,
                hideDiscriminator: V.Z.hidePersonalInformation,
                hideInstantInvites: V.Z.hideInstantInvites
            })
        );
    });
    return (0, i.jsx)(em, ea({ channel: t }, n, r));
}
function e_(e) {
    var t, n;
    let { channel: r, iconClassName: o, className: a, icon: s, tooltip: c, tooltipPosition: u = 'bottom', popoutPosition: d = 'bottom', popoutAlign: p = 'right', subscribeToGlobalHotkey: m = !1 } = e,
        g = l.useRef(null),
        [b, _] = l.useState(null != r && r.isGroupDM() && 0 === r.recipients.length),
        y = l.useCallback(() => _((e) => !e), []);
    l.useEffect(
        () => (
            m && K.S.subscribe(en.CkL.TOGGLE_DM_CREATE, y),
            () => {
                K.S.unsubscribe(en.CkL.TOGGLE_DM_CREATE, y);
            }
        ),
        [m, y]
    );
    let C = (0, h.e7)([z.default], () => z.default.getUser(null == r ? void 0 : r.getRecipientId()));
    return (l.useEffect(() => {
        (0, M._)();
    }, []),
    (null != (t = null == C ? void 0 : C.bot) && t) || (null != (n = null == C ? void 0 : C.isProvisional) && n))
        ? null
        : (0, i.jsx)(f.yRy, {
              targetElementRef: g,
              renderPopout: (e) =>
                  (0, i.jsx)(
                      eb,
                      es(ea({}, e), {
                          onClose: e.closePopout,
                          channel: r
                      })
                  ),
              position: d,
              shouldShow: b,
              nudgeAlignIntoViewport: !0,
              autoInvert: !0,
              align: p,
              onRequestClose: () => _(!1),
              animation: f.yRy.Animation.NONE,
              ignoreModalClicks: !0,
              clickTrap: !0,
              children: (e) =>
                  (0, i.jsx)(
                      ee.ZP.Icon,
                      es(ea({}, e), {
                          ref: g,
                          onClick: y,
                          icon: null != s ? s : null == r ? f.kL_ : f.ejJ,
                          className: a,
                          iconClassName: o,
                          tooltip: c,
                          tooltipPosition: u
                      })
                  )
          });
}
function ey(e) {
    let { channel: t, className: n, popoutPosition: r = 'bottom', popoutAlign: o = 'right' } = e,
        a = l.useRef(null),
        [s, c] = l.useState(!1),
        u = l.useCallback(() => c((e) => !e), []);
    return (
        l.useEffect(() => {
            (0, M._)();
        }, []),
        (0, i.jsx)(f.yRy, {
            targetElementRef: a,
            renderPopout: (e) =>
                (0, i.jsx)(
                    eb,
                    es(ea({}, e), {
                        onClose: e.closePopout,
                        channel: t
                    })
                ),
            position: r,
            shouldShow: s,
            nudgeAlignIntoViewport: !0,
            autoInvert: !0,
            align: o,
            onRequestClose: () => c(!1),
            animation: f.yRy.Animation.NONE,
            ignoreModalClicks: !0,
            clickTrap: !0,
            children: (e) =>
                (0, i.jsx)(
                    f.zxk,
                    es(ea({}, e), {
                        look: f.zxk.Looks.OUTLINED,
                        buttonRef: a,
                        size: f.PhG.MEDIUM,
                        onClick: u,
                        className: n,
                        children: er.NW.string(er.t['6Qgren'])
                    })
                )
        })
    );
}
function eC(e) {
    let t = ex(e);
    return new Set(
        c()(W.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, D.bc)(e.type))
            .filter((e) => ex(e.recipients) === t)
            .map((e) => e.id)
            .value()
    );
}
function ex(e) {
    return JSON.stringify(e.sort());
}
eo(em, 'contextType', O.ZP);
