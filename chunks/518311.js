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
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    c = n(913527),
    u = n.n(c),
    d = n(873546),
    p = n(442837),
    h = n(481060),
    f = n(570140),
    m = n(26151),
    g = n(493683),
    b = n(529103),
    _ = n(447543),
    y = n(708690),
    x = n(194359),
    C = n(425493),
    v = n(461745),
    j = n(493773),
    O = n(40851),
    E = n(100527),
    I = n(367907),
    P = n(906732),
    S = n(43267),
    Z = n(933557),
    N = n(600164),
    T = n(313201),
    A = n(429090),
    w = n(912114),
    R = n(366980),
    M = n(703656),
    k = n(93127),
    L = n(752048),
    D = n(131704),
    U = n(592125),
    B = n(341165),
    F = n(544610),
    G = n(19780),
    H = n(306680),
    V = n(699516),
    z = n(246946),
    W = n(594174),
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
function ea(e, t, n) {
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
function eo(e) {
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
                ea(e, t, n[t]);
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
    return (0, i.jsxs)(N.Z, {
        align: N.Z.Align.CENTER,
        justify: N.Z.Justify.CENTER,
        direction: N.Z.Direction.VERTICAL,
        className: o()(ei.errorState, t),
        children: [(0, i.jsx)('div', { className: o()(ei.errorStateIcon, el.marginBottom20) }), n]
    });
}
let eh = (e) => {
        var t;
        let { channel: n, onClose: r } = e,
            l = null != (t = (0, Z.ZP)(n)) ? t : '',
            a = (0, p.e7)([H.ZP], () => {
                var e;
                return null != (e = H.ZP.lastMessageId(n.id)) ? e : n.id;
            });
        return (0, i.jsx)(h.P3F, {
            onClick: () => {
                (0, M.XU)(en.ME, n.id), r();
            },
            children: (0, i.jsxs)('div', {
                className: ei.confirmChannelItemContainer,
                children: [
                    (0, i.jsx)(h.qEK, {
                        src: (0, S.x)(n),
                        size: h.EFr.SIZE_24,
                        'aria-label': l
                    }),
                    (0, i.jsx)('span', {
                        className: ei.confirmChannelName,
                        children: l
                    }),
                    (0, i.jsx)('span', {
                        className: ei.lastActiveTimestamp,
                        children: u()(Q.default.extractTimestamp(a)).fromNow()
                    })
                ]
            })
        });
    },
    ef = (e) => {
        var { onConfirm: t, channelIds: n } = e,
            r = ec(e, ['onConfirm', 'channelIds']);
        let l = (0, p.Wu)([U.Z], () => Array.from(n).map(U.Z.getChannel), [n]);
        return (0, i.jsxs)(
            h.ConfirmModal,
            es(
                eo(
                    {
                        header: er.intl.string(er.t.uFHxNT),
                        confirmText: er.intl.string(er.t.KCNNJi),
                        cancelText: er.intl.string(er.t['ETE/oK']),
                        onConfirm: t,
                        confirmButtonColor: h.zxk.Colors.BRAND
                    },
                    r
                ),
                {
                    children: [
                        (0, i.jsx)(h.Text, {
                            variant: 'text-md/normal',
                            children: er.intl.string(er.t.rIsSqK)
                        }),
                        (0, i.jsx)(h.vwX, {
                            className: ei.selectExistingFormHeader,
                            children: er.intl.string(er.t.cjE7wM)
                        }),
                        (0, i.jsx)(h.Ttm, {
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
        f.Z.wait(() => y.Z.open(null == e ? void 0 : e.id));
        let t = (0, I.v_)(e);
        Y.default.track(
            en.rMx.OPEN_POPOUT,
            es(eo({}, t), {
                type: this._getAnalyticsEntryPoint().entryPointType,
                source: this._getAnalyticsEntryPoint().entryPointSource,
                is_friend: !this.isNotFriends()
            })
        ),
            K.S.subscribe(en.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            K.S.subscribe(en.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        K.S.unsubscribe(en.CkL.SCROLL_PAGE_UP, this.scrollPageUp), K.S.unsubscribe(en.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), f.Z.wait(() => y.Z.close());
    }
    isNotFriends() {
        let { channel: e } = this.props;
        if (null == e || !e.isDM()) return !1;
        let t = e.getRecipientId();
        if (null == t) throw Error('no recipient in DM');
        return !V.Z.isFriend(t);
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = $.Z.getCurrentConfig({ location: '5326c5_1' }, { autoTrackExposure: !1 });
        _.ZP.createInvite(e.id, { max_age: t }, en.t4x.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = W.default.getCurrentUser();
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
            l = t.size > 1 || null != e ? er.intl.string(er.t.ZGMNAw) : er.intl.string(er.t['6Urw1t']);
        return (0, i.jsx)(h.zxk, {
            fullWidth: !0,
            disabled: r,
            onClick: this.handleInviteUsers,
            size: h.zxk.Sizes.LARGE,
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
            children: (0, i.jsx)(h.zxk, {
                size: h.zxk.Sizes.SMALL,
                disabled: r,
                onClick: this.handleInviteUsers,
                children: er.intl.string(er.t.OYkgVl)
            })
        });
    }
    renderSubtitle() {
        if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
        let e = this.getRemaining(),
            t = e <= 0 ? er.intl.formatToPlainString(er.t.xYr009, { number: this.getMaxParticipants() }) : er.intl.formatToPlainString(er.t.HrSDPD, { number: e });
        return (0, i.jsx)(h.Text, {
            variant: 'text-xs/normal',
            className: o()(ei.subtitle, { [ei.subtitleWarning]: e < 0 }, el.marginTop4),
            children: t
        });
    }
    renderSearchBar() {
        var e;
        let { query: t, hasFriends: n, results: r, selectedRow: l, selectedUsers: a } = this.props;
        if (!n || this.isNotFriends()) return null;
        let o = [];
        return (
            a.forEach((e) => {
                let t = W.default.getUser(e);
                null != t && o.push(J.ZP.getName(t));
            }),
            (0, i.jsxs)('div', {
                className: ei.searchBar,
                children: [
                    (0, i.jsx)(v.ZP, {
                        ref: this.searchBarRef,
                        className: ei.searchBarComponent,
                        autoFocus: !0,
                        placeholder: 0 === a.size ? er.intl.string(er.t.Wxnb6u) : '',
                        disabled: this.isPartyFull(),
                        size: v.ZP.Sizes.MEDIUM,
                        maxHeight: this.props.inBornThisNamedExperiment ? 110 : void 0,
                        query: t,
                        selectedRow: l,
                        sections: [null != (e = null == r ? void 0 : r.length) ? e : 0],
                        tags: o,
                        onSelect: this.handleSelect,
                        onSelectionChange: this.handleSelectionChange,
                        onQueryChange: this.handleQueryChange,
                        onRemoveTag: this.handleRemoveUser,
                        onHeightChange: this.scrollToCounterSearchBarHeightChange,
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
            t = this.isNotFriends() ? er.intl.string(er.t.Xjlbvr) : er.intl.string(er.t.CdNhGR);
        return (0, i.jsxs)(h.xBx, {
            direction: N.Z.Direction.VERTICAL,
            align: N.Z.Align.STRETCH,
            className: ei.header,
            separator: e,
            children: [
                d.tq ? this.renderMobileCloseButton() : null,
                (0, i.jsx)(h.X6q, {
                    id: eu,
                    variant: 'heading-lg/semibold',
                    children: t
                }),
                this.renderSubtitle(),
                (0, i.jsx)(h.olH, {
                    className: ei.closeButton,
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
            let n = W.default.getUser(t),
                r = null != n ? n.username : '',
                l = null != n && V.Z.getRelationshipType(n.id) === en.OGo.PENDING_OUTGOING;
            return (0, i.jsxs)(ep, {
                className: ei.notFriends,
                children: [
                    (0, i.jsx)(h.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: er.intl.format(er.t['eg+R9/'], { username: r })
                    }),
                    (0, i.jsx)(h.zxk, {
                        disabled: l,
                        size: h.zxk.Sizes.SMALL,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                        className: el.marginTop20,
                        children: l ? er.intl.string(er.t.xMH6vL) : er.intl.string(er.t['PMsq/f'])
                    })
                ]
            });
        }
        return t
            ? this.isPartyFull()
                ? (0, i.jsxs)(ep, {
                      className: ei.partyFull,
                      children: [(0, i.jsx)('div', { children: er.intl.string(er.t.OtTQDw) }), (0, i.jsx)('div', { children: er.intl.format(er.t.xYr009, { number: this.getMaxParticipants() }) })]
                  })
                : 0 === n.length
                  ? (0, i.jsx)(ep, {
                        className: o()(ei.noResults, el.marginBottom20),
                        children: (0, i.jsx)('div', { children: er.intl.string(er.t.SV4DJy) })
                    })
                  : (0, i.jsx)(h.aVo, {
                        ref: this.scrollerRef,
                        sections: [n.length],
                        className: ei.scroller,
                        innerClassName: ei.scrollerInner,
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
                      (0, i.jsx)('div', { children: er.intl.string(er.t['7orY6O']) }),
                      (0, i.jsx)(h.zxk, {
                          autoFocus: !0,
                          fullWidth: !0,
                          size: h.zxk.Sizes.SMALL,
                          onClick: this.handleAddFriendNavigation,
                          className: el.marginTop20,
                          children: er.intl.string(er.t.w5uwoK)
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
        let a = null != t ? (0, R.Z)(t.code) : '',
            s = a.length > 0;
        return (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(h.vwX, {
                    tag: 'h5',
                    className: el.marginBottom8,
                    children: er.intl.string(er.t.t3O2BQ)
                }),
                (0, i.jsx)(h.kO8, {
                    supportsCopy: q.wS,
                    placeholder: (0, R.Z)(er.intl.string(er.t.lPVBqK)),
                    value: s ? (n ? er.intl.string(er.t['6HzNgY']) : a) : '',
                    buttonColor: h.zxk.Colors.BRAND,
                    text: s ? (r ? er.intl.string(er.t.q30c5u) : er.intl.string(er.t.OpuAlJ)) : er.intl.string(er.t.qzxqUV),
                    mode: r ? h.uA3.SUCCESS : h.uA3.DEFAULT,
                    onCopy: () => {
                        s ? this.handleCopyInvite(a) : this.createInvite();
                    }
                }),
                a.length > 0
                    ? (0, i.jsx)(h.Text, {
                          variant: 'text-xs/normal',
                          className: o()(el.marginTop8, ei.footerText),
                          children: er.intl.format(er.t.ZVdJMz, { numHours: ''.concat(24) })
                      })
                    : null
            ]
        });
    }
    renderFooter() {
        let { hasFriends: e, channel: t, selectedUsers: n } = this.props;
        if (this.isNotFriends() || !e || this.isPartyFull()) return null;
        if (null == t)
            return (0, i.jsxs)(h.mzw, {
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
            return (0, i.jsx)(h.mzw, {
                className: ei.footer,
                children: r
            });
    }
    render() {
        let { transitionState: e, inBornThisNamedExperiment: t } = this.props;
        return (0, i.jsxs)(h.Y0X, {
            transitionState: null != e ? e : h.Dvm.ENTERED,
            className: o()(ei.popout, {
                [ei.showAsModal]: t,
                [ei.showAsPopout]: !t
            }),
            fullscreenOnMobile: !1,
            parentComponent: 'PrivateChannelRecipientsInvite',
            children: [this.renderHeader(), this.renderSearchBar(), this.renderBody(), this.renderFooter()]
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
            ea(this, 'state', {
                separator: !1,
                copied: !1,
                newChannelName: '',
                previewIcon: void 0
            }),
            ea(this, 'copyTimeout', void 0),
            ea(this, 'scrollerRef', l.createRef()),
            ea(this, 'searchBarRef', l.createRef()),
            ea(this, '_mobileCloseRef', l.createRef()),
            ea(this, '_searchCounter', 0),
            ea(this, '_existingTimeout', null),
            ea(this, 'scrollPageUp', () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollPageUp({ animate: !0 });
            }),
            ea(this, 'scrollPageDown', () => {
                var e;
                null == (e = this.scrollerRef.current) || e.scrollPageDown({ animate: !0 });
            }),
            ea(this, 'renderMobileCloseButton', () =>
                (0, i.jsx)('div', {
                    className: ei.mobileToolsContainer,
                    ref: this._mobileCloseRef,
                    children: (0, i.jsx)(h.JcV, {
                        containerRef: this._mobileCloseRef,
                        children: (0, i.jsx)('div', {
                            children: (0, i.jsx)(C.Z, {
                                className: ei.mobileToolsCloseIcon,
                                closeAction: this.props.onClose,
                                keybind: 'ESC'
                            })
                        })
                    })
                })
            ),
            ea(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                let { results: n } = this.props;
                return null != n[t] ? (this.props.inBornThisNamedExperiment ? 48 : 42) : 0;
            }),
            ea(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: r, selectedUsers: l, selectedRow: a, hideDiscriminator: o } = this.props,
                    s = r[n];
                if (null == s) return null;
                let { user: c, comparator: u } = s,
                    d = l.has(c.id);
                return (0, i.jsx)(
                    et.Z,
                    {
                        row: n,
                        user: c,
                        hideDiscriminator: o,
                        comparator: u,
                        checked: d,
                        selected: n === a,
                        onClick: this.handleClick,
                        onMouseEnter: this.focusResult,
                        'aria-posinset': n + 1,
                        'aria-setsize': r.length,
                        inlineUsername: !this.props.inBornThisNamedExperiment
                    },
                    c.id
                );
            }),
            ea(this, 'forceFocus', () => {
                let e = this.searchBarRef.current;
                null == e || e.focus();
            }),
            ea(this, 'focusResult', (e) => {
                y.Z.select(e);
            }),
            ea(this, 'handleSelect', (e, t) => {
                let { results: n, channel: r } = this.props;
                null == t ? y.Z.clear(null == r ? void 0 : r.id) : null != n && this.handleClick(n[t].user.id);
            }),
            ea(this, 'handleSelectionChange', (e, t) => {
                y.Z.select(t);
                let n = this.scrollerRef.current;
                null != n &&
                    n.scrollToIndex({
                        section: e,
                        row: t,
                        padding: 8
                    });
            }),
            ea(this, 'handleQueryChange', (e) => {
                let { channel: t } = this.props,
                    n = (0, I.v_)(t);
                y.Z.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        Y.default.track(
                            en.rMx.SEARCH_USER_LIST_STARTED,
                            es(eo({}, n), {
                                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                                search_query_length: e.length
                            })
                        ),
                            this._searchCounter++;
                    }, 500));
            }),
            ea(this, 'handleRemoveUser', (e) => {
                let t = Array.from(this.props.selectedUsers);
                y.Z.removeUser(t[e]), this.forceFocus();
            }),
            ea(this, 'handleClick', (e) => {
                let { selectedUsers: t, query: n, channel: r } = this.props;
                t.has(e) ? y.Z.removeUser(e) : (y.Z.addUser(e), n.length > 0 && y.Z.clear(null == r ? void 0 : r.id)), this.forceFocus();
            }),
            ea(this, 'handleAddFriendNavigation', () => {
                (0, M.uL)(en.Z5c.FRIENDS), b.Z.setSection(en.pJs.ADD_FRIEND), this.props.onClose();
            }),
            ea(this, 'handleScroll', () => {
                let e = this.scrollerRef.current;
                null != e && this.setState({ separator: !e.isScrolledToTop() });
            }),
            ea(this, 'handleChannelNameChange', (e) => {
                this.setState({ newChannelName: e });
            }),
            ea(this, 'handleIconChange', (e) => {
                let { imageUri: t } = e;
                this.setState({ previewIcon: t });
            }),
            ea(this, 'handleIconRemove', () => {
                this.setState({ previewIcon: null });
            }),
            ea(this, 'createNewDM', (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    r = (0, I.v_)(n),
                    i = !0;
                1 === e.length && (i = null == g.Z._openCachedDMChannel(e[0])),
                    Y.default.track(
                        en.rMx.CREATE_DM_USER_LIST_CLICKED,
                        es(eo({}, r), {
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
                        '' !== this.state.newChannelName && (t.name = this.state.newChannelName),
                            null != this.state.previewIcon && (t.icon = this.state.previewIcon),
                            (null != t.name || null != t.icon) && g.Z.updateChannel(e, t, E.Z.NEW_GROUP_DM_INVITE_MODAL),
                            Y.default.track(en.rMx.GDM_EDIT_INTERACTED, {
                                channel_id: e,
                                channel_type: en.d4z.GROUP_DM,
                                location: E.Z.NEW_GROUP_DM_INVITE_MODAL,
                                new_name_set: '' !== this.state.newChannelName,
                                new_icon_set: null != this.state.previewIcon
                            });
                    });
            }),
            ea(this, 'pushToExistingDM', (e, t) => {
                let n = this._searchCounter,
                    r = (0, I.v_)(e),
                    i = G.Z.getChannelId() === e.id;
                g.Z.addRecipients(e.id, t, en.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (i) {
                        if (e.isDM() && n !== e.id) return void m.Z.call(n, !1, !0);
                        m.Z.ring(n, t, 'dm_invite');
                    }
                }),
                    Y.default.track(
                        en.rMx.CREATE_DM_USER_LIST_CLICKED,
                        es(eo({}, r), {
                            is_new_dm: !0,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: t,
                            num_searches: n,
                            affinity_score: this._getUserAffinities(t).affinities
                        })
                    );
            }),
            ea(this, 'handleInviteUsers', () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    r = Array.from(t);
                if (null != e) {
                    let t = ex(Array.from(new Set([...e.recipients, ...r])));
                    t.size > 0
                        ? (0, h.h7j)(
                              (n) =>
                                  (0, i.jsx)(
                                      ef,
                                      es(eo({}, n), {
                                          onConfirm: () => this.pushToExistingDM(e, r),
                                          channelIds: t
                                      })
                                  ),
                              {},
                              (0, h.VnL)(this.context.appContext)
                          )
                        : this.pushToExistingDM(e, r);
                } else {
                    let e = ex(r);
                    r.length > 1 && e.size > 0
                        ? (0, h.h7j)(
                              (t) =>
                                  (0, i.jsx)(
                                      ef,
                                      es(eo({}, t), {
                                          onConfirm: () => this.createNewDM(r),
                                          channelIds: e
                                      })
                                  ),
                              {},
                              (0, h.VnL)(this.context.appContext)
                          )
                        : this.createNewDM(r);
                }
                n();
            }),
            ea(this, 'handleCopyInvite', (e) => {
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
            }),
            ea(this, 'scrollToCounterSearchBarHeightChange', (e) => {
                var t, n;
                if (!this.props.inBornThisNamedExperiment) return;
                let r = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? void 0 : t.call(n);
                null != r && (r.scrollTop = Math.max(0, r.scrollTop + e));
            });
    }
}
function eg(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: l, onIconRemove: a, onChange: o } = e,
        { analyticsLocations: s } = (0, P.ZP)(E.Z.NEW_GROUP_DM_INVITE_MODAL);
    if (!(0, A.a)(E.Z.NEW_GROUP_DM_INVITE_MODAL)) return null;
    let c = (0, Z.pT)(Array.from(t), W.default, V.Z);
    return (0, i.jsxs)('div', {
        className: ei.customizationContainer,
        children: [
            (0, i.jsx)(w.B, {
                className: ei.iconSelector,
                channel: null,
                previewIcon: r,
                onIconChange: l,
                onIconRemove: a,
                analyticsLocations: s,
                petite: !0,
                allowRemovingIcon: !1
            }),
            (0, i.jsx)(h.Text, {
                className: ei.channelNameLabel,
                variant: 'text-sm/medium',
                color: 'header-muted',
                children: er.intl.string(er.t.YynaLC)
            }),
            (0, i.jsx)(h.oil, {
                'aria-label': er.intl.string(er.t.YynaLC),
                className: ei.channelNameInput,
                placeholder: c,
                value: n,
                onChange: o
            })
        ]
    });
}
function eb(e) {
    var { channel: t } = e,
        n = ec(e, ['channel']);
    let r = (0, p.cj)([F.Z, B.Z, z.Z], () => {
        let e;
        return (
            null != t && null != (e = B.Z.getInvite(t.id)) && e.isExpired() && (e = null),
            es(eo({}, F.Z.getState()), {
                invite: e,
                hideDiscriminator: z.Z.hidePersonalInformation,
                hideInstantInvites: z.Z.hideInstantInvites
            })
        );
    });
    return (0, i.jsx)(em, eo({ channel: t }, n, r));
}
function e_(e) {
    var t, n;
    let { channel: r, iconClassName: a, className: o, icon: s, tooltip: c, tooltipPosition: u = 'bottom', popoutPosition: d = 'bottom', popoutAlign: f = 'right', subscribeToGlobalHotkey: m = !1, location: g } = e,
        b = null != s ? s : null == r ? h.kL_ : h.ejJ,
        _ = (0, A.a)(g),
        y = 'channel-invite-modal-'.concat(null == r ? void 0 : r.id),
        x = (0, h.VXO)(y),
        C = l.useCallback(
            () =>
                (0, h.ZDy)(
                    () =>
                        Promise.resolve((e) =>
                            (0, i.jsx)(
                                eb,
                                es(eo({}, e), {
                                    channel: r,
                                    inBornThisNamedExperiment: _
                                })
                            )
                        ),
                    { modalKey: y }
                ),
            [r, y, _]
        ),
        v = l.useRef(null),
        [O, E] = l.useState(null != r && r.isGroupDM() && 0 === r.recipients.length),
        I = l.useCallback(() => (_ ? (x ? (0, h.Mr3)(y) : C()) : E((e) => !e)), [_, x, y, C]);
    l.useEffect(
        () => (
            m && K.S.subscribe(en.CkL.TOGGLE_DM_CREATE, I),
            () => {
                K.S.unsubscribe(en.CkL.TOGGLE_DM_CREATE, I);
            }
        ),
        [m, I, _]
    );
    let P = (0, p.e7)([W.default], () => W.default.getUser(null == r ? void 0 : r.getRecipientId()));
    return ((0, j.ZP)(() => {
        (0, k._)();
    }),
    (null != (t = null == P ? void 0 : P.bot) && t) || (null != (n = null == P ? void 0 : P.isProvisional) && n))
        ? null
        : _
          ? (0, i.jsx)(ee.ZP.Icon, {
                ref: v,
                onClick: C,
                icon: b,
                className: o,
                iconClassName: a,
                tooltip: c,
                tooltipPosition: u
            })
          : (0, i.jsx)(h.yRy, {
                targetElementRef: v,
                renderPopout: (e) =>
                    (0, i.jsx)(
                        eb,
                        es(eo({}, e), {
                            onClose: e.closePopout,
                            channel: r,
                            inBornThisNamedExperiment: _
                        })
                    ),
                position: d,
                shouldShow: O,
                nudgeAlignIntoViewport: !0,
                autoInvert: !0,
                align: f,
                onRequestClose: () => E(!1),
                animation: h.yRy.Animation.NONE,
                ignoreModalClicks: !0,
                clickTrap: !0,
                children: (e) =>
                    (0, i.jsx)(
                        ee.ZP.Icon,
                        es(eo({}, e), {
                            ref: v,
                            onClick: I,
                            icon: b,
                            className: o,
                            iconClassName: a,
                            tooltip: c,
                            tooltipPosition: u
                        })
                    )
            });
}
function ey(e) {
    let { channel: t, className: n, popoutPosition: r = 'bottom', popoutAlign: a = 'right' } = e;
    (0, j.ZP)(() => {
        (0, k._)();
    });
    let o = (0, A.a)('PrivateChannelRecipientsInviteTextButton'),
        s = l.useRef(null),
        [c, u] = l.useState(!1),
        d = l.useCallback(() => u((e) => !e), []),
        p = l.useCallback(
            () =>
                (0, h.ZDy)(() =>
                    Promise.resolve((e) =>
                        (0, i.jsx)(
                            eb,
                            es(eo({}, e), {
                                channel: t,
                                inBornThisNamedExperiment: o
                            })
                        )
                    )
                ),
            [t, o]
        );
    return o
        ? (0, i.jsx)(h.zxk, {
              onClick: p,
              look: h.zxk.Looks.OUTLINED,
              buttonRef: s,
              size: h.PhG.MEDIUM,
              className: n,
              children: er.intl.string(er.t['6Qgren'])
          })
        : (0, i.jsx)(h.yRy, {
              targetElementRef: s,
              renderPopout: (e) =>
                  (0, i.jsx)(
                      eb,
                      es(eo({}, e), {
                          onClose: e.closePopout,
                          channel: t,
                          inBornThisNamedExperiment: o
                      })
                  ),
              position: r,
              shouldShow: c,
              nudgeAlignIntoViewport: !0,
              autoInvert: !0,
              align: a,
              onRequestClose: () => u(!1),
              animation: h.yRy.Animation.NONE,
              ignoreModalClicks: !0,
              clickTrap: !0,
              children: (e) =>
                  (0, i.jsx)(
                      h.zxk,
                      es(eo({}, e), {
                          look: h.zxk.Looks.OUTLINED,
                          buttonRef: s,
                          size: h.PhG.MEDIUM,
                          onClick: d,
                          className: n,
                          children: er.intl.string(er.t['6Qgren'])
                      })
                  )
          });
}
function ex(e) {
    let t = eC(e);
    return new Set(
        (0, s.chain)(U.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, D.bc)(e.type))
            .filter((e) => eC(e.recipients) === t)
            .map((e) => e.id)
            .value()
    );
}
function eC(e) {
    return JSON.stringify(e.sort());
}
ea(em, 'contextType', O.ZP);
