n.d(t, { Z: () => B }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(692547),
    d = n(481060),
    f = n(980568),
    _ = n(560768),
    p = n(812206),
    h = n(405701),
    m = n(540059),
    g = n(243778),
    E = n(843693),
    v = n(246642),
    y = n(921227),
    I = n(314897),
    T = n(430824),
    b = n(699516),
    S = n(885110),
    A = n(111583),
    N = n(594174),
    C = n(451478),
    R = n(626135),
    O = n(823379),
    D = n(5192),
    L = n(981631),
    x = n(388032),
    w = n(437047);
function P(e, t, n) {
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
let M = [];
class k extends r.PureComponent {
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ fadeIn: !0 }), (this.timeout = null), this.logShownEventIfNeeded();
        }, 100);
    }
    componentDidUpdate() {
        this.logShownEventIfNeeded();
    }
    logShownEventIfNeeded() {
        let e = this.props.activity.application_id;
        null != e &&
            -1 === M.indexOf(e) &&
            (R.default.track(L.rMx.SHOW_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e
            }),
            M.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e, isRefreshChatInputEnabled: t } = this.props;
        return (0, i.jsxs)('div', {
            className: s()(w.activityInviteEducation, { [w.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                t
                    ? (0, i.jsx)(d.whL, {
                          size: 'sm',
                          className: w.activityInviteEducationLeftArrow
                      })
                    : (0, i.jsx)('div', { className: w.activityInviteEducationArrow }),
                (0, i.jsx)('span', {
                    children: x.intl.format(x.t['i/MoCg'], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            P(this, 'state', { fadeIn: !1 }),
            P(this, 'timeout', null),
            P(this, 'handleDismissInviteEducation', () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && f.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function U(e) {
    let { channel: t, guild: n } = e,
        r = [];
    return (0, i.jsx)(g.ZP, {
        contentTypes: r,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return null;
        }
    });
}
function G(e) {
    let { guildId: t, activity: n, showInviteEducation: r, isFocused: a, typingUsers: o, className: u, channel: c, isThreadCreation: f, renderDots: _, poggermodeEnabled: p, isComboing: g } = e,
        { rateLimitPerUser: E } = c,
        y = N.default.getCurrentUser(),
        I = T.Z.getGuild(t),
        S = E > 0,
        A = f
            ? []
            : l()(o)
                  .keys()
                  .filter((e) => e !== (null == y ? void 0 : y.id))
                  .reject((e) => b.Z.isBlockedOrIgnored(e))
                  .map((e) => N.default.getUser(e))
                  .filter(O.lm)
                  .map((e) => D.ZP.getName(t, c.id, e))
                  .value(),
        C = (0, m.R6)('TypingUsers');
    if (0 === A.length && !S && !g)
        return r && null != n
            ? (0, i.jsx)(k, {
                  activity: n,
                  isFocused: a,
                  isRefreshChatInputEnabled: C
              })
            : (0, i.jsx)(U, {
                  channel: c,
                  guild: I
              });
    let [R, L, P] = A,
        M = '';
    return (
        1 === A.length
            ? (M = x.intl.format(x.t.lJ9sZW, { a: R }))
            : 2 === A.length
              ? (M = x.intl.format(x.t.rB0CUV, {
                    a: R,
                    b: L
                }))
              : 3 === A.length
                ? (M = x.intl.format(x.t.StKTho, {
                      a: R,
                      b: L,
                      c: P
                  }))
                : A.length > 3 && (M = x.intl.string(x.t.uVDhqa)),
        (0, i.jsxs)('div', {
            className: s()(
                w.typing,
                {
                    'stop-animation': !a,
                    [w.isComboing]: p && g
                },
                u
            ),
            children: [
                (0, i.jsxs)('div', {
                    className: w.typingDots,
                    children: [
                        A.length > 0 &&
                            !1 !== _ &&
                            (0, i.jsx)(d.bbz, {
                                className: w.ellipsis,
                                dotRadius: 3.5,
                                themed: !0
                            }),
                        (0, i.jsx)('span', {
                            className: w.text,
                            'aria-live': 'polite',
                            'aria-atomic': !0,
                            children: M
                        })
                    ]
                }),
                C
                    ? null
                    : (0, i.jsx)(h.Z, {
                          channel: c,
                          isThreadCreation: f
                      }),
                p && g && (0, i.jsx)(v.Z, { channelId: c.id })
            ]
        })
    );
}
function B(e) {
    let { channel: t, isThreadCreation: n = !1, ...r } = e,
        a = (0, u.e7)([S.Z], () => S.Z.findActivity((e) => null != e.application_id)),
        s = (0, u.e7)([E.ZP, I.default], () => E.ZP.getUserCombo(I.default.getId(), t.id)),
        o = (0, u.e7)([y.Z, p.Z], () => (0, _.Z)(t, a, y.Z, p.Z)),
        l = {
            ...r,
            baseTextColor: (0, d.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
            activeTextColor: (0, d.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
            showInviteEducation: o,
            activity: a,
            typingUsers: (0, u.e7)([A.Z], () => A.Z.getTypingUsers(t.id)),
            isFocused: (0, u.e7)([C.Z], () => C.Z.isFocused()),
            guildId: t.guild_id,
            isComboing: null != s,
            channel: t,
            isThreadCreation: n
        };
    return (0, i.jsx)(G, { ...l });
}
