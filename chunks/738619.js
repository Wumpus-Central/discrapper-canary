n.d(t, {
    ZP: () => A,
    d7: () => k,
    iD: () => _,
}),
    n(539854),
    n(388685);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    l = n.n(o),
    s = n(392711),
    c = n.n(s),
    a = n(442837),
    u = n(692547),
    d = n(481060),
    p = n(980568),
    f = n(560768),
    O = n(812206),
    b = n(405701),
    y = n(624030),
    g = n(699516),
    h = n(885110),
    m = n(111583),
    v = n(594174),
    j = n(451478),
    S = n(626135),
    P = n(823379),
    w = n(5192),
    I = n(981631),
    Z = n(388032),
    E = n(3771);
function x(e, t, n) {
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
function T(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
let C = [];
class N extends i.PureComponent {
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
            -1 === C.indexOf(e) &&
            (S.default.track(I.rMx.SHOW_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
            }),
            C.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e } = this.props;
        return (0, r.jsxs)("div", {
            className: l()(E.activityInviteEducation, { [E.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, r.jsx)("div", { className: E.activityInviteEducationArrow }),
                (0, r.jsx)("span", {
                    children: Z.intl.format(Z.t["i/MoCg"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "state", { fadeIn: !1 }),
            x(this, "timeout", null),
            x(this, "handleDismissInviteEducation", () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && p.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function D(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: n,
            typingUsers: o,
            className: s,
            channel: c,
            isThreadCreation: a,
            renderDots: u,
            isInTextChannel: p,
        } = e,
        { rateLimitPerUser: f } = c,
        O = i.useRef(null),
        y = i.useRef(null),
        [g, h] = i.useState(!1);
    if (
        (i.useLayoutEffect(() => {
            if (null != O.current && null != y.current && p) {
                let e = () => {
                    if (null != O.current && null != y.current) {
                        let e = O.current.getBoundingClientRect();
                        y.current.scrollWidth + 48 > e.width ? h(!0) : h(!1);
                    }
                };
                e();
                let t = new ResizeObserver(() => {
                    e();
                });
                return (
                    t.observe(O.current),
                    t.observe(y.current),
                    () => {
                        t.disconnect();
                    }
                );
            }
        }, [p]),
        0 === o.length && !(f > 0))
    )
        return null != t
            ? (0, r.jsx)(N, {
                  activity: t,
                  isFocused: n,
              })
            : null;
    let [m, v, j] = o,
        S = "";
    1 === o.length
        ? (S = Z.intl.format(Z.t.lJ9sZW, { a: m }))
        : 2 === o.length
          ? (S = Z.intl.format(Z.t.rB0CUV, {
                a: m,
                b: v,
            }))
          : 3 === o.length
            ? (S = Z.intl.format(Z.t.StKTho, {
                  a: m,
                  b: v,
                  c: j,
              }))
            : o.length > 3 && (S = Z.intl.format(Z.t.Q8lUnJ, {}));
    let P = g && o.length > 0 && o.length <= 3 ? Z.intl.format(Z.t["qD/0qa"], {}) : S;
    return (0, r.jsxs)("div", {
        className: l()(
            E.typing,
            {
                "stop-animation": !n,
                [E.inTextChannel]: p,
            },
            s,
        ),
        children: [
            (0, r.jsxs)("div", {
                className: E.typingDots,
                ref: O,
                children: [
                    o.length > 0 &&
                        !1 !== u &&
                        (0, r.jsx)(d.bbz, {
                            className: E.ellipsis,
                            dotRadius: 3.5,
                            themed: !0,
                        }),
                    (0, r.jsx)("span", {
                        className: E.text,
                        "aria-live": "polite",
                        "aria-atomic": !0,
                        children: P,
                    }),
                    (0, r.jsx)("span", {
                        className: E.text,
                        style: {
                            position: "absolute",
                            visibility: "hidden",
                        },
                        "aria-hidden": !0,
                        ref: y,
                        children: S,
                    }),
                ],
            }),
            (0, r.jsx)(b.Z, {
                channel: c,
                isThreadCreation: a,
            }),
        ],
    });
}
function _(e) {
    let t = (0, a.e7)([m.Z], () => m.Z.getTypingUsers(e.id)),
        n = (0, a.e7)([v.default], () => v.default.getCurrentUser());
    return c()(t)
        .keys()
        .filter((e) => e !== (null == n ? void 0 : n.id))
        .reject((e) => g.Z.isBlockedOrIgnored(e))
        .map((e) => v.default.getUser(e))
        .filter(P.lm)
        .map((t) => w.ZP.getName(e.guild_id, e.id, t))
        .value();
}
function k(e) {
    let t = (0, a.e7)([h.Z], () => h.Z.findActivity((e) => null != e.application_id));
    return (0, a.e7)([y.Z, O.Z, g.Z], () => (0, f.Z)(e, t, y.Z, O.Z, g.Z)) ? t : null;
}
function A(e) {
    var t,
        n,
        { channel: i, isThreadCreation: o = !1 } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["channel", "isThreadCreation"]);
    let s = _(i),
        c =
            ((t = T({}, l)),
            (n = n =
                {
                    baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
                    activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
                    activityInviteEducationActivity: k(i),
                    typingUsers: o ? [] : s,
                    isFocused: (0, a.e7)([j.Z], () => j.Z.isFocused()),
                    guildId: i.guild_id,
                    channel: i,
                    isThreadCreation: o,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t);
    return (0, r.jsx)(D, T({}, c));
}
