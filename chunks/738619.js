n.d(t, {
    ZP: () => U,
    d7: () => A,
    iD: () => k,
}),
    n(539854),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    p = n(980568),
    f = n(393903),
    O = n(560768),
    b = n(812206),
    h = n(405701),
    m = n(624030),
    g = n(699516),
    y = n(885110),
    v = n(111583),
    S = n(594174),
    j = n(451478),
    I = n(626135),
    Z = n(823379),
    E = n(5192),
    x = n(981631),
    w = n(388032),
    P = n(747212);
function T(e, t, n) {
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
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
let D = [];
class N extends r.PureComponent {
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
            -1 === D.indexOf(e) &&
            (I.default.track(x.rMx.SHOW_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
            }),
            D.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e } = this.props;
        return (0, i.jsxs)("div", {
            className: o()(P.activityInviteEducation, { [P.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, i.jsx)("div", { className: P.activityInviteEducationArrow }),
                (0, i.jsx)("span", {
                    children: w.intl.format(w.t["i/MoCt"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            T(this, "state", { fadeIn: !1 }),
            T(this, "timeout", null),
            T(this, "handleDismissInviteEducation", () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && p.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function _(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: n,
            typingUsers: l,
            className: s,
            channel: a,
            isThreadCreation: c,
            renderDots: u,
            isInTextChannel: p = !1,
        } = e,
        { rateLimitPerUser: O } = a,
        b = r.useRef(null),
        m = r.useRef(null),
        [g, y] = r.useState(!1),
        v = r.useCallback(() => {
            if (null == b.current || null == m.current) return;
            let e = b.current.getBoundingClientRect();
            m.current.scrollWidth + 48 > e.width ? y(!0) : y(!1);
        }, []);
    if (((0, f.s)(b, v, [], { enabled: p }), (0, f.s)(m, v, [], { enabled: p }), 0 === l.length && !(O > 0)))
        return null != t
            ? (0, i.jsx)(N, {
                  activity: t,
                  isFocused: n,
              })
            : null;
    let [S, j, I] = l,
        Z = "";
    1 === l.length
        ? (Z = w.intl.format(w.t.lJ9sZX, { a: S }))
        : 2 === l.length
          ? (Z = w.intl.format(w.t.rB0CUa, {
                a: S,
                b: j,
            }))
          : 3 === l.length
            ? (Z = w.intl.format(w.t.StKThj, {
                  a: S,
                  b: j,
                  c: I,
              }))
            : l.length > 3 && (Z = w.intl.format(w.t.Q8lUnE, {}));
    let E = g && l.length > 0 && l.length <= 3 ? w.intl.format(w.t["qD/0qZ"], {}) : Z;
    return (0, i.jsxs)("div", {
        className: o()(
            P.typing,
            {
                "stop-animation": !n,
                [P.inTextChannel]: p,
            },
            s,
        ),
        children: [
            (0, i.jsxs)("div", {
                className: P.typingDots,
                ref: b,
                children: [
                    l.length > 0 &&
                        !1 !== u &&
                        (0, i.jsx)(d.bbz, {
                            className: P.ellipsis,
                            dotRadius: 3.5,
                            themed: !0,
                        }),
                    (0, i.jsx)("span", {
                        className: P.text,
                        "aria-live": "polite",
                        "aria-atomic": !0,
                        children: E,
                    }),
                    (0, i.jsx)("span", {
                        className: P.text,
                        style: {
                            position: "absolute",
                            visibility: "hidden",
                        },
                        "aria-hidden": !0,
                        ref: m,
                        children: Z,
                    }),
                ],
            }),
            (0, i.jsx)(h.Z, {
                channel: a,
                isThreadCreation: c,
            }),
        ],
    });
}
function k(e) {
    let t = (0, c.e7)([v.Z], () => v.Z.getTypingUsers(e.id)),
        n = (0, c.e7)([S.default], () => S.default.getCurrentUser());
    return a()(t)
        .keys()
        .filter((e) => e !== (null == n ? void 0 : n.id))
        .reject((e) => g.Z.isBlockedOrIgnored(e))
        .map((e) => S.default.getUser(e))
        .filter(Z.lm)
        .map((t) => E.ZP.getName(e.guild_id, e.id, t))
        .value();
}
function A(e) {
    let t = (0, c.e7)([y.Z], () => y.Z.findActivity((e) => null != e.application_id));
    return (0, c.e7)([m.Z, b.Z, g.Z], () => (0, O.Z)(e, t, m.Z, b.Z, g.Z)) ? t : null;
}
function U(e) {
    var t,
        n,
        { channel: r, isThreadCreation: l = !1 } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["channel", "isThreadCreation"]);
    let s = k(r),
        a =
            ((t = C({}, o)),
            (n = n =
                {
                    baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                    activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                    activityInviteEducationActivity: A(r),
                    typingUsers: l ? [] : s,
                    isFocused: (0, c.e7)([j.Z], () => j.Z.isFocused()),
                    guildId: r.guild_id,
                    channel: r,
                    isThreadCreation: l,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t);
    return (0, i.jsx)(_, C({}, a));
}
