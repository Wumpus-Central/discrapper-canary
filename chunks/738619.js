r.d(n, {
    Z: function () {
        return V;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(442837),
    p = r(692547),
    h = r(481060),
    _ = r(980568),
    m = r(560768),
    g = r(812206),
    E = r(405701),
    v = r(540059),
    y = r(243778),
    b = r(843693),
    I = r(246642),
    T = r(921227),
    S = r(314897),
    A = r(430824),
    C = r(699516),
    N = r(885110),
    R = r(111583),
    O = r(594174),
    D = r(451478),
    L = r(626135),
    x = r(823379),
    w = r(5192),
    P = r(981631),
    M = r(388032),
    k = r(215225);
function U(e, n, r) {
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
let B = [];
class G extends s.PureComponent {
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
            -1 === B.indexOf(e) &&
            (L.default.track(P.rMx.SHOW_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e
            }),
            B.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e } = this.props;
        return (0, o.jsxs)('div', {
            className: u()(k.activityInviteEducation, { [k.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, o.jsx)('div', { className: k.activityInviteEducationArrow }),
                (0, o.jsx)('span', {
                    children: M.intl.format(M.t['i/MoCg'], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            U(this, 'state', { fadeIn: !1 }),
            U(this, 'timeout', null),
            U(this, 'handleDismissInviteEducation', () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && _.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function Z(e) {
    let { channel: n, guild: r } = e,
        i = [];
    return (0, o.jsx)(y.ZP, {
        contentTypes: i,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: r } = e;
            return null;
        }
    });
}
function F(e) {
    let { guildId: n, activity: r, showInviteEducation: i, isFocused: a, typingUsers: s, className: l, channel: c, isThreadCreation: f, renderDots: p, poggermodeEnabled: _, isComboing: m } = e,
        { rateLimitPerUser: g } = c,
        y = O.default.getCurrentUser(),
        b = A.Z.getGuild(n),
        T = g > 0,
        S = f
            ? []
            : d()(s)
                  .keys()
                  .filter((e) => e !== (null == y ? void 0 : y.id))
                  .reject((e) => C.Z.isBlockedOrIgnored(e))
                  .map((e) => O.default.getUser(e))
                  .filter(x.lm)
                  .map((e) => w.ZP.getName(n, c.id, e))
                  .value(),
        N = (0, v.R6)('TypingUsers');
    if (0 === S.length && !T && !m)
        return i && null != r
            ? (0, o.jsx)(G, {
                  activity: r,
                  isFocused: a
              })
            : (0, o.jsx)(Z, {
                  channel: c,
                  guild: b
              });
    let [R, D, L] = S,
        P = '';
    return (
        1 === S.length
            ? (P = M.intl.format(M.t.lJ9sZW, { a: R }))
            : 2 === S.length
              ? (P = M.intl.format(M.t.rB0CUV, {
                    a: R,
                    b: D
                }))
              : 3 === S.length
                ? (P = M.intl.format(M.t.StKTho, {
                      a: R,
                      b: D,
                      c: L
                  }))
                : S.length > 3 && (P = M.intl.string(M.t.uVDhqa)),
        (0, o.jsxs)('div', {
            className: u()(
                k.typing,
                {
                    'stop-animation': !a,
                    [k.isComboing]: _ && m
                },
                l
            ),
            children: [
                (0, o.jsxs)('div', {
                    className: k.typingDots,
                    children: [
                        S.length > 0 &&
                            !1 !== p &&
                            (0, o.jsx)(h.Dots, {
                                className: k.ellipsis,
                                dotRadius: 3.5,
                                themed: !0
                            }),
                        (0, o.jsx)('span', {
                            className: k.text,
                            'aria-live': 'polite',
                            'aria-atomic': !0,
                            children: P
                        })
                    ]
                }),
                N
                    ? null
                    : (0, o.jsx)(E.Z, {
                          channel: c,
                          isThreadCreation: f
                      }),
                _ && m && (0, o.jsx)(I.Z, { channelId: c.id })
            ]
        })
    );
}
function V(e) {
    let { channel: n, isThreadCreation: r = !1, ...i } = e,
        a = (0, f.e7)([N.Z], () => N.Z.findActivity((e) => null != e.application_id)),
        s = (0, f.e7)([b.ZP, S.default], () => b.ZP.getUserCombo(S.default.getId(), n.id)),
        l = (0, f.e7)([T.Z, g.Z], () => (0, m.Z)(n, a, T.Z, g.Z)),
        u = {
            ...i,
            baseTextColor: (0, h.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            activeTextColor: (0, h.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            showInviteEducation: l,
            activity: a,
            typingUsers: (0, f.e7)([R.Z], () => R.Z.getTypingUsers(n.id)),
            isFocused: (0, f.e7)([D.Z], () => D.Z.isFocused()),
            guildId: n.guild_id,
            isComboing: null != s,
            channel: n,
            isThreadCreation: r
        };
    return (0, o.jsx)(F, { ...u });
}
