(n.d(t, {
    Z: () => ey,
    l: () => eC
}),
    n(642613),
    n(415506),
    n(539854),
    n(388685),
    n(35282),
    n(49124));
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
    h = n(755721),
    f = n(481060),
    m = n(570140),
    g = n(26151),
    b = n(493683),
    _ = n(529103),
    y = n(447543),
    C = n(708690),
    x = n(194359),
    v = n(425493),
    O = n(794433),
    j = n(493773),
    E = n(40851),
    S = n(100527),
    P = n(367907),
    I = n(906732),
    Z = n(43267),
    N = n(933557),
    T = n(600164),
    A = n(313201),
    w = n(429090),
    R = n(912114),
    M = n(366980),
    D = n(703656),
    L = n(93127),
    k = n(752048),
    U = n(131704),
    B = n(592125),
    F = n(341165),
    H = n(544610),
    G = n(19780),
    V = n(306680),
    z = n(699516),
    W = n(246946),
    Y = n(594174),
    q = n(626135),
    K = n(572004),
    X = n(585483),
    Q = n(823379),
    J = n(709054),
    $ = n(51144),
    ee = n(73752),
    et = n(665149),
    en = n(575464),
    er = n(981631),
    ei = n(388032),
    el = n(382314),
    ea = n(20493);
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
function es(e) {
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
                eo(e, t, n[t]);
            }));
    }
    return e;
}
function ec(e, t) {
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
function eu(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
let ed = (0, A.hQ)(),
    ep = (0, A.hQ)();
function eh(e) {
    let { className: t, children: n } = e;
    return (0, i.jsxs)(T.Z, {
        align: T.Z.Align.CENTER,
        justify: T.Z.Justify.CENTER,
        direction: T.Z.Direction.VERTICAL,
        className: o()(el.errorState, t),
        children: [(0, i.jsx)('div', { className: o()(el.errorStateIcon, ea.marginBottom20) }), n]
    });
}
let ef = (e) => {
        var t;
        let { channel: n, onClose: r } = e,
            l = null != (t = (0, N.ZP)(n)) ? t : '',
            a = (0, p.e7)([V.ZP], () => {
                var e;
                return null != (e = V.ZP.lastMessageId(n.id)) ? e : n.id;
            });
        return (0, i.jsx)(f.P3F, {
            onClick: () => {
                ((0, D.XU)(er.ME, n.id), r());
            },
            children: (0, i.jsxs)('div', {
                className: el.confirmChannelItemContainer,
                children: [
                    (0, i.jsx)(f.qEK, {
                        src: (0, Z.x)(n),
                        size: f.EFr.SIZE_24,
                        'aria-label': l
                    }),
                    (0, i.jsx)('span', {
                        className: el.confirmChannelName,
                        children: l
                    }),
                    (0, i.jsx)('span', {
                        className: el.lastActiveTimestamp,
                        children: u()(J.default.extractTimestamp(a)).fromNow()
                    })
                ]
            })
        });
    },
    em = (e) => {
        var { onConfirm: t, channelIds: n } = e,
            r = eu(e, ['onConfirm', 'channelIds']);
        let l = (0, p.Wu)([B.Z], () => Array.from(n).map(B.Z.getChannel), [n]);
        return (0, i.jsxs)(
            f.ConfirmModal,
            ec(
                es(
                    {
                        header: ei.intl.string(ei.t.uFHxNT),
                        confirmText: ei.intl.string(ei.t.KCNNJi),
                        cancelText: ei.intl.string(ei.t['ETE/oK']),
                        onConfirm: t,
                        confirmButtonColor: h.zx.Colors.BRAND
                    },
                    r
                ),
                {
                    children: [
                        (0, i.jsx)(f.Text, {
                            variant: 'text-md/normal',
                            children: ei.intl.string(ei.t.rIsSqK)
                        }),
                        (0, i.jsx)(f.vwX, {
                            className: el.selectExistingFormHeader,
                            children: ei.intl.string(ei.t.cjE7wM)
                        }),
                        (0, i.jsx)(f.Ttm, {
                            className: el.confirmInviteScroller,
                            children: l
                                .filter(Q.lm)
                                .sort((e, t) => {
                                    var n, r;
                                    let i = null != (n = e.lastMessageId) ? n : e.id,
                                        l = null != (r = t.lastMessageId) ? r : t.id;
                                    return J.default.compare(l, i);
                                })
                                .map((e) =>
                                    (0, i.jsx)(
                                        ef,
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
class eg extends (r = l.PureComponent) {
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
        let t = (0, P.v_)(e);
        (q.default.track(
            er.rMx.OPEN_POPOUT,
            ec(es({}, t), {
                type: this._getAnalyticsEntryPoint().entryPointType,
                source: this._getAnalyticsEntryPoint().entryPointSource,
                is_friend: !this.isNotFriends()
            })
        ),
            X.S.subscribe(er.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            X.S.subscribe(er.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown));
    }
    componentWillUnmount() {
        (X.S.unsubscribe(er.CkL.SCROLL_PAGE_UP, this.scrollPageUp), X.S.unsubscribe(er.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), m.Z.wait(() => C.Z.close()));
    }
    isNotFriends() {
        let { channel: e } = this.props;
        if (null == e || !e.isDM()) return !1;
        let t = e.getRecipientId();
        if (null == t) throw Error('no recipient in DM');
        return !z.Z.isFriend(t);
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = ee.Z.getCurrentConfig({ location: '5326c5_1' }, { autoTrackExposure: !1 });
        y.ZP.createInvite(e.id, { max_age: t }, er.t4x.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = Y.default.getCurrentUser();
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
            l = t.size > 1 || null != e ? ei.intl.string(ei.t.ZGMNAw) : ei.intl.string(ei.t['6Urw1t']);
        return (0, i.jsx)(h.zx, {
            fullWidth: !0,
            disabled: r,
            onClick: this.handleInviteUsers,
            size: h.zx.Sizes.LARGE,
            children: l
        });
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            r = 0 === t.size || n < 0;
        return (0, i.jsx)('div', {
            className: el.addButton,
            children: (0, i.jsx)(f.zxk, {
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
        return (0, i.jsx)(f.Text, {
            variant: 'text-xs/normal',
            className: o()(el.subtitle, { [el.subtitleWarning]: e < 0 }, ea.marginTop4),
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
                let t = Y.default.getUser(e);
                null != t && o.push($.ZP.getName(t));
            }),
            (0, i.jsxs)('div', {
                className: el.searchBar,
                children: [
                    (0, i.jsx)(O.Z, {
                        ref: this.searchBarRef,
                        className: el.searchBarComponent,
                        autoFocus: !0,
                        placeholder: 0 === a.size ? ei.intl.string(ei.t.Wxnb6u) : '',
                        disabled: this.isPartyFull(),
                        size: O.Z.Sizes.MEDIUM,
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
                            'aria-labelledby': ed,
                            'aria-controls': ep,
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
            t = this.isNotFriends() ? ei.intl.string(ei.t.Xjlbvr) : ei.intl.string(ei.t.CdNhGR);
        return (0, i.jsxs)(f.xBx, {
            direction: T.Z.Direction.VERTICAL,
            align: T.Z.Align.STRETCH,
            className: el.header,
            separator: e,
            children: [
                d.tq ? this.renderMobileCloseButton() : null,
                (0, i.jsx)(f.X6q, {
                    id: ed,
                    variant: 'heading-lg/semibold',
                    children: t
                }),
                this.renderSubtitle(),
                (0, i.jsx)(f.olH, {
                    className: el.closeButton,
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
            let n = Y.default.getUser(t),
                r = null != n ? n.username : '',
                l = null != n && z.Z.getRelationshipType(n.id) === er.OGo.PENDING_OUTGOING;
            return (0, i.jsxs)(eh, {
                className: el.notFriends,
                children: [
                    (0, i.jsx)(f.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: ei.intl.format(ei.t['eg+R9/'], { username: r })
                    }),
                    (0, i.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: ea.marginTop20,
                        children: (0, i.jsx)(f.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: l ? ei.intl.string(ei.t.xMH6vL) : ei.intl.string(ei.t['PMsq/f']),
                            disabled: l,
                            onClick: () => (null != n ? this.handleAddFriend(n) : null)
                        })
                    })
                ]
            });
        }
        return t
            ? this.isPartyFull()
                ? (0, i.jsxs)(eh, {
                      className: el.partyFull,
                      children: [(0, i.jsx)('div', { children: ei.intl.string(ei.t.OtTQDw) }), (0, i.jsx)('div', { children: ei.intl.format(ei.t.xYr009, { number: this.getMaxParticipants() }) })]
                  })
                : 0 === n.length
                  ? (0, i.jsx)(eh, {
                        className: o()(el.noResults, ea.marginBottom20),
                        children: (0, i.jsx)('div', { children: ei.intl.string(ei.t.SV4DJy) })
                    })
                  : (0, i.jsx)(f.aVo, {
                        ref: this.scrollerRef,
                        sections: [n.length],
                        className: el.scroller,
                        innerClassName: el.scrollerInner,
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
                        innerId: ep,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: 'vertical'
                    })
            : (0, i.jsxs)(eh, {
                  className: el.noFriends,
                  children: [
                      (0, i.jsx)('div', { children: ei.intl.string(ei.t['7orY6O']) }),
                      (0, i.jsx)('div', {
                          'data-button-hoisted-classname-wrapper': !0,
                          className: ea.marginTop20,
                          children: (0, i.jsx)(f.zxk, {
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
        let a = null != t ? (0, M.Z)(t.code) : '',
            s = a.length > 0;
        return (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(f.vwX, {
                    tag: 'h5',
                    className: ea.marginBottom8,
                    children: ei.intl.string(ei.t.t3O2BQ)
                }),
                (0, i.jsx)(f.kO8, {
                    supportsCopy: K.wS,
                    placeholder: (0, M.Z)(ei.intl.string(ei.t.lPVBqK)),
                    value: s ? (n ? ei.intl.string(ei.t['6HzNgY']) : a) : '',
                    buttonColor: h.zx.Colors.BRAND,
                    text: s ? (r ? ei.intl.string(ei.t.q30c5u) : ei.intl.string(ei.t.OpuAlJ)) : ei.intl.string(ei.t.qzxqUV),
                    mode: r ? f.uA3.SUCCESS : f.uA3.DEFAULT,
                    onCopy: () => {
                        s ? this.handleCopyInvite(a) : this.createInvite();
                    }
                }),
                a.length > 0
                    ? (0, i.jsx)(f.Text, {
                          variant: 'text-xs/normal',
                          className: o()(ea.marginTop8, el.footerText),
                          children: ei.intl.format(ei.t.ZVdJMz, { numHours: ''.concat(24) })
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
                className: el.footer,
                children: [
                    n.size > 1 &&
                        (0, i.jsx)(eb, {
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
                className: el.footer,
                children: r
            });
    }
    render() {
        let { transitionState: e, inBornThisNamedExperiment: t } = this.props;
        return (0, i.jsxs)(f.Y0X, {
            transitionState: null != e ? e : f.Dvm.ENTERED,
            className: o()(el.popout, {
                [el.showAsModal]: t,
                [el.showAsPopout]: !t
            }),
            fullscreenOnMobile: !1,
            parentComponent: 'PrivateChannelRecipientsInvite',
            children: [this.renderHeader(), this.renderSearchBar(), this.renderBody(), this.renderFooter()]
        });
    }
    handleAddFriend(e) {
        (this.props.onClose(),
            x.Z.sendRequest({
                discordTag: $.ZP.getUserTag(e, { identifiable: 'always' }),
                context: { location: 'Group DM' }
            }));
    }
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                var t;
                let n = k.Z.getUserAffinity(e);
                return null != (t = null == n ? void 0 : n.communicationProbability) ? t : -1;
            })
        };
    }
    constructor(...e) {
        (super(...e),
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
                    className: el.mobileToolsContainer,
                    ref: this._mobileCloseRef,
                    children: (0, i.jsx)(f.JcV, {
                        containerRef: this._mobileCloseRef,
                        children: (0, i.jsx)('div', {
                            children: (0, i.jsx)(v.Z, {
                                className: el.mobileToolsCloseIcon,
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
                return null != n[t] ? (this.props.inBornThisNamedExperiment ? 48 : 42) : 0;
            }),
            eo(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: r, selectedUsers: l, selectedRow: a, hideDiscriminator: o } = this.props,
                    s = r[n];
                if (null == s) return null;
                let { user: c, comparator: u } = s,
                    d = l.has(c.id);
                return (0, i.jsx)(
                    en.Z,
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
                    n = (0, P.v_)(t);
                (C.Z.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        (q.default.track(
                            er.rMx.SEARCH_USER_LIST_STARTED,
                            ec(es({}, n), {
                                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                                search_query_length: e.length
                            })
                        ),
                            this._searchCounter++);
                    }, 500)));
            }),
            eo(this, 'handleRemoveUser', (e) => {
                let t = Array.from(this.props.selectedUsers);
                (C.Z.removeUser(t[e]), this.forceFocus());
            }),
            eo(this, 'handleClick', (e) => {
                let { selectedUsers: t, query: n, channel: r } = this.props;
                (t.has(e) ? C.Z.removeUser(e) : (C.Z.addUser(e), n.length > 0 && C.Z.clear(null == r ? void 0 : r.id)), this.forceFocus());
            }),
            eo(this, 'handleAddFriendNavigation', () => {
                (_.Z.transitionToSection(er.pJs.ADD_FRIEND, { explicit: !0 }), this.props.onClose());
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
                    r = (0, P.v_)(n),
                    i = !0;
                (1 === e.length && (i = null == b.Z._openCachedDMChannel(e[0])),
                    q.default.track(
                        er.rMx.CREATE_DM_USER_LIST_CLICKED,
                        ec(es({}, r), {
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
                    b.Z.openPrivateChannel({
                        recipientIds: e,
                        location: 'New Group DM'
                    }).then((e) => {
                        let t = {};
                        ('' !== this.state.newChannelName && (t.name = this.state.newChannelName),
                            null != this.state.previewIcon && (t.icon = this.state.previewIcon),
                            (null != t.name || null != t.icon) && b.Z.updateChannel(e, t, S.Z.NEW_GROUP_DM_INVITE_MODAL),
                            q.default.track(er.rMx.GDM_EDIT_INTERACTED, {
                                channel_id: e,
                                channel_type: er.d4z.GROUP_DM,
                                location: S.Z.NEW_GROUP_DM_INVITE_MODAL,
                                new_name_set: '' !== this.state.newChannelName,
                                new_icon_set: null != this.state.previewIcon
                            }));
                    }));
            }),
            eo(this, 'pushToExistingDM', (e, t) => {
                let n = this._searchCounter,
                    r = (0, P.v_)(e),
                    i = G.Z.getChannelId() === e.id;
                (b.Z.addRecipients(e.id, t, er.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (i) {
                        if (e.isDM() && n !== e.id) return void g.Z.call(n, !1, !0);
                        g.Z.ring(n, t, 'dm_invite');
                    }
                }),
                    q.default.track(
                        er.rMx.CREATE_DM_USER_LIST_CLICKED,
                        ec(es({}, r), {
                            is_new_dm: !0,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: t,
                            num_searches: n,
                            affinity_score: this._getUserAffinities(t).affinities
                        })
                    ));
            }),
            eo(this, 'handleInviteUsers', () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    r = Array.from(t);
                if (null != e) {
                    let t = ex(Array.from(new Set([...e.recipients, ...r])));
                    t.size > 0
                        ? (0, f.h7j)(
                              (n) =>
                                  (0, i.jsx)(
                                      em,
                                      ec(es({}, n), {
                                          onConfirm: () => this.pushToExistingDM(e, r),
                                          channelIds: t
                                      })
                                  ),
                              {},
                              (0, f.VnL)(this.context.appContext)
                          )
                        : this.pushToExistingDM(e, r);
                } else {
                    let e = ex(r);
                    r.length > 1 && e.size > 0
                        ? (0, f.h7j)(
                              (t) =>
                                  (0, i.jsx)(
                                      em,
                                      ec(es({}, t), {
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
                (null != n && (0, K.JG)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({ copied: !0 }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({ copied: !1 });
                    }, 1000)),
                    q.default.track(er.rMx.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: er.Sbl.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null
                    }));
            }),
            eo(this, 'scrollToCounterSearchBarHeightChange', (e) => {
                var t, n;
                if (!this.props.inBornThisNamedExperiment) return;
                let r = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? void 0 : t.call(n);
                null != r && (r.scrollTop = Math.max(0, r.scrollTop + e));
            }));
    }
}
function eb(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: l, onIconRemove: a, onChange: o } = e,
        { analyticsLocations: s } = (0, I.ZP)(S.Z.NEW_GROUP_DM_INVITE_MODAL);
    if (!(0, w.a)(S.Z.NEW_GROUP_DM_INVITE_MODAL)) return null;
    let c = (0, N.pT)(Array.from(t), Y.default, z.Z);
    return (0, i.jsxs)('div', {
        className: el.customizationContainer,
        children: [
            (0, i.jsx)(R.B, {
                className: el.iconSelector,
                channel: null,
                previewIcon: r,
                onIconChange: l,
                onIconRemove: a,
                analyticsLocations: s,
                petite: !0,
                allowRemovingIcon: !1
            }),
            (0, i.jsx)(f.Text, {
                className: el.channelNameLabel,
                variant: 'text-sm/medium',
                color: 'header-muted',
                children: ei.intl.string(ei.t.YynaLC)
            }),
            (0, i.jsx)(f.oil, {
                'aria-label': ei.intl.string(ei.t.YynaLC),
                className: el.channelNameInput,
                placeholder: c,
                value: n,
                onChange: o
            })
        ]
    });
}
function e_(e) {
    var { channel: t } = e,
        n = eu(e, ['channel']);
    let r = (0, p.cj)([H.Z, F.Z, W.Z], () => {
        let e;
        return (
            null != t && null != (e = F.Z.getInvite(t.id)) && e.isExpired() && (e = null),
            ec(es({}, H.Z.getState()), {
                invite: e,
                hideDiscriminator: W.Z.hidePersonalInformation,
                hideInstantInvites: W.Z.hideInstantInvites
            })
        );
    });
    return (0, i.jsx)(eg, es({ channel: t }, n, r));
}
function ey(e) {
    var t, n;
    let { channel: r, iconClassName: a, className: o, icon: s, tooltip: c, tooltipPosition: u = 'bottom', popoutPosition: d = 'bottom', popoutAlign: h = 'right', subscribeToGlobalHotkey: m = !1, location: g } = e,
        b = null != s ? s : null == r ? f.kL_ : f.ejJ,
        _ = (0, w.a)(g),
        y = 'channel-invite-modal-'.concat(null == r ? void 0 : r.id),
        C = (0, f.VXO)(y),
        x = l.useCallback(
            () =>
                (0, f.ZDy)(
                    () =>
                        Promise.resolve((e) =>
                            (0, i.jsx)(
                                e_,
                                ec(es({}, e), {
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
        S = l.useCallback(() => (_ ? (C ? (0, f.Mr3)(y) : x()) : E((e) => !e)), [_, C, y, x]);
    l.useEffect(
        () => (
            m && X.S.subscribe(er.CkL.TOGGLE_DM_CREATE, S),
            () => {
                X.S.unsubscribe(er.CkL.TOGGLE_DM_CREATE, S);
            }
        ),
        [m, S, _]
    );
    let P = (0, p.e7)([Y.default], () => Y.default.getUser(null == r ? void 0 : r.getRecipientId()));
    return ((0, j.ZP)(() => {
        (0, L._)();
    }),
    (null != (t = null == P ? void 0 : P.bot) && t) || (null != (n = null == P ? void 0 : P.isProvisional) && n))
        ? null
        : _
          ? (0, i.jsx)(et.ZP.Icon, {
                ref: v,
                onClick: x,
                icon: b,
                className: o,
                iconClassName: a,
                tooltip: c,
                tooltipPosition: u
            })
          : (0, i.jsx)(f.yRy, {
                targetElementRef: v,
                renderPopout: (e) =>
                    (0, i.jsx)(
                        e_,
                        ec(es({}, e), {
                            onClose: e.closePopout,
                            channel: r,
                            inBornThisNamedExperiment: _
                        })
                    ),
                position: d,
                shouldShow: O,
                nudgeAlignIntoViewport: !0,
                autoInvert: !0,
                align: h,
                onRequestClose: () => E(!1),
                animation: f.yRy.Animation.NONE,
                ignoreModalClicks: !0,
                clickTrap: !0,
                children: (e) =>
                    (0, i.jsx)(
                        et.ZP.Icon,
                        ec(es({}, e), {
                            ref: v,
                            onClick: S,
                            icon: b,
                            className: o,
                            iconClassName: a,
                            tooltip: c,
                            tooltipPosition: u
                        })
                    )
            });
}
function eC(e) {
    let { channel: t, className: n, popoutPosition: r = 'bottom', popoutAlign: a = 'right' } = e;
    (0, j.ZP)(() => {
        (0, L._)();
    });
    let o = (0, w.a)('PrivateChannelRecipientsInviteTextButton'),
        s = l.useRef(null),
        [c, u] = l.useState(!1),
        d = l.useCallback(() => u((e) => !e), []),
        p = l.useCallback(
            () =>
                (0, f.ZDy)(() =>
                    Promise.resolve((e) =>
                        (0, i.jsx)(
                            e_,
                            ec(es({}, e), {
                                channel: t,
                                inBornThisNamedExperiment: o
                            })
                        )
                    )
                ),
            [t, o]
        );
    return o
        ? (0, i.jsx)(h.zx, {
              onClick: p,
              look: h.zx.Looks.OUTLINED,
              buttonRef: s,
              size: h.Ph.MEDIUM,
              className: n,
              children: ei.intl.string(ei.t['6Qgren'])
          })
        : (0, i.jsx)(f.yRy, {
              targetElementRef: s,
              renderPopout: (e) =>
                  (0, i.jsx)(
                      e_,
                      ec(es({}, e), {
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
              animation: f.yRy.Animation.NONE,
              ignoreModalClicks: !0,
              clickTrap: !0,
              children: (e) =>
                  (0, i.jsx)(
                      h.zx,
                      ec(es({}, e), {
                          look: h.zx.Looks.OUTLINED,
                          buttonRef: s,
                          size: h.Ph.MEDIUM,
                          onClick: d,
                          className: n,
                          children: ei.intl.string(ei.t['6Qgren'])
                      })
                  )
          });
}
function ex(e) {
    let t = ev(e);
    return new Set(
        (0, s.chain)(B.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, U.bc)(e.type))
            .filter((e) => ev(e.recipients) === t)
            .map((e) => e.id)
            .value()
    );
}
function ev(e) {
    return JSON.stringify(e.sort());
}
eo(eg, 'contextType', E.ZP);
