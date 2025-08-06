n.d(t, {
    ZP: () => F,
    d7: () => Z,
    iD: () => B,
}),
    n(539854),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    f = n(980568),
    _ = n(560768),
    p = n(812206),
    h = n(405701),
    m = n(843693),
    g = n(246642),
    E = n(624030),
    b = n(314897),
    y = n(699516),
    O = n(885110),
    v = n(111583),
    I = n(594174),
    T = n(451478),
    S = n(626135),
    A = n(823379),
    N = n(5192),
    C = n(981631),
    R = n(388032),
    P = n(486850);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = k(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let j = [];
class U extends i.PureComponent {
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
            -1 === j.indexOf(e) &&
            (S.default.track(C.rMx.SHOW_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
            }),
            j.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e } = this.props;
        return (0, r.jsxs)("div", {
            className: a()(P.activityInviteEducation, { [P.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, r.jsx)("div", { className: P.activityInviteEducationArrow }),
                (0, r.jsx)("span", {
                    children: R.intl.format(R.t["i/MoCg"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            w(this, "state", { fadeIn: !1 }),
            w(this, "timeout", null),
            w(this, "handleDismissInviteEducation", () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && f.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function G(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: n,
            typingUsers: o,
            className: s,
            channel: l,
            isThreadCreation: c,
            renderDots: u,
            poggermodeEnabled: f,
            isComboing: _,
            isInTextChannel: p,
        } = e,
        { rateLimitPerUser: m } = l,
        E = m > 0,
        b = i.useRef(null),
        y = i.useRef(null),
        [O, v] = i.useState(!1);
    if (
        (i.useLayoutEffect(() => {
            if (null != b.current && null != y.current && p) {
                let e = () => {
                    if (null != b.current && null != y.current) {
                        let e = b.current.getBoundingClientRect();
                        y.current.scrollWidth + 48 > e.width ? v(!0) : v(!1);
                    }
                };
                e();
                let t = new ResizeObserver(() => {
                    e();
                });
                return (
                    t.observe(b.current),
                    t.observe(y.current),
                    () => {
                        t.disconnect();
                    }
                );
            }
        }, [p]),
        0 === o.length && !E && !_)
    )
        return null != t
            ? (0, r.jsx)(U, {
                  activity: t,
                  isFocused: n,
              })
            : null;
    let [I, T, S] = o,
        A = "";
    1 === o.length
        ? (A = R.intl.format(R.t.lJ9sZW, { a: I }))
        : 2 === o.length
          ? (A = R.intl.format(R.t.rB0CUV, {
                a: I,
                b: T,
            }))
          : 3 === o.length
            ? (A = R.intl.format(R.t.StKTho, {
                  a: I,
                  b: T,
                  c: S,
              }))
            : o.length > 3 && (A = R.intl.format(R.t.Q8lUnJ, {}));
    let N = O && o.length > 0 && o.length <= 3 ? R.intl.format(R.t["qD/0qa"], {}) : A;
    return (0, r.jsxs)("div", {
        className: a()(
            P.typing,
            {
                "stop-animation": !n,
                [P.isComboing]: f && _,
                [P.inTextChannel]: p,
            },
            s,
        ),
        children: [
            (0, r.jsxs)("div", {
                className: P.typingDots,
                ref: b,
                children: [
                    o.length > 0 &&
                        !1 !== u &&
                        (0, r.jsx)(d.bbz, {
                            className: P.ellipsis,
                            dotRadius: 3.5,
                            themed: !0,
                        }),
                    (0, r.jsx)("span", {
                        className: P.text,
                        "aria-live": "polite",
                        "aria-atomic": !0,
                        children: N,
                    }),
                    (0, r.jsx)("span", {
                        className: P.text,
                        style: {
                            position: "absolute",
                            visibility: "hidden",
                        },
                        "aria-hidden": !0,
                        ref: y,
                        children: A,
                    }),
                ],
            }),
            (0, r.jsx)(h.Z, {
                channel: l,
                isThreadCreation: c,
            }),
            f && _ && (0, r.jsx)(g.Z, { channelId: l.id }),
        ],
    });
}
function B(e) {
    let t = (0, c.e7)([v.Z], () => v.Z.getTypingUsers(e.id)),
        n = (0, c.e7)([I.default], () => I.default.getCurrentUser());
    return l()(t)
        .keys()
        .filter((e) => e !== (null == n ? void 0 : n.id))
        .reject((e) => y.Z.isBlockedOrIgnored(e))
        .map((e) => I.default.getUser(e))
        .filter(A.lm)
        .map((t) => N.ZP.getName(e.guild_id, e.id, t))
        .value();
}
function Z(e) {
    let t = (0, c.e7)([O.Z], () => O.Z.findActivity((e) => null != e.application_id));
    return (0, c.e7)([E.Z, p.Z, y.Z], () => (0, _.Z)(e, t, E.Z, p.Z, y.Z)) ? t : null;
}
function F(e) {
    var { channel: t, isThreadCreation: n = !1 } = e,
        i = M(e, ["channel", "isThreadCreation"]);
    let o = (0, c.e7)([m.ZP, b.default], () => m.ZP.getUserCombo(b.default.getId(), t.id)),
        a = B(t),
        s = x(D({}, i), {
            baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
            activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
            activityInviteEducationActivity: Z(t),
            typingUsers: n ? [] : a,
            isFocused: (0, c.e7)([T.Z], () => T.Z.isFocused()),
            guildId: t.guild_id,
            isComboing: null != o,
            channel: t,
            isThreadCreation: n,
        });
    return (0, r.jsx)(G, D({}, s));
}
