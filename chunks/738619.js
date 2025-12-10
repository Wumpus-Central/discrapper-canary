n.d(t, {
    ZP: () => A,
    d7: () => k,
    iD: () => _,
}),
    n(539854),
    n(388685);
var i = n(54381),
    r = n(473749),
    o = n(120356),
    l = n.n(o),
    s = n(392711),
    a = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    p = n(980568),
    f = n(560768),
    O = n(812206),
    b = n(405701),
    h = n(624030),
    m = n(699516),
    g = n(885110),
    y = n(111583),
    v = n(594174),
    S = n(451478),
    j = n(626135),
    I = n(823379),
    Z = n(5192),
    E = n(981631),
    x = n(388032),
    w = n(458182);
function P(e, t, n) {
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
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
let C = [];
class D extends r.PureComponent {
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
            (j.default.track(E.rMx.SHOW_TUTORIAL, {
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
        return (0, i.jsxs)("div", {
            className: l()(w.activityInviteEducation, { [w.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, i.jsx)("div", { className: w.activityInviteEducationArrow }),
                (0, i.jsx)("span", {
                    children: x.intl.format(x.t["i/MoCt"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            P(this, "state", { fadeIn: !1 }),
            P(this, "timeout", null),
            P(this, "handleDismissInviteEducation", () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && p.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function N(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: n,
            typingUsers: o,
            className: s,
            channel: a,
            isThreadCreation: c,
            renderDots: u,
            isInTextChannel: p,
        } = e,
        { rateLimitPerUser: f } = a,
        O = r.useRef(null),
        h = r.useRef(null),
        [m, g] = r.useState(!1);
    if (
        (r.useLayoutEffect(() => {
            if (null != O.current && null != h.current && p) {
                let e = () => {
                    if (null != O.current && null != h.current) {
                        let e = O.current.getBoundingClientRect();
                        h.current.scrollWidth + 48 > e.width ? g(!0) : g(!1);
                    }
                };
                e();
                let t = new ResizeObserver(() => {
                    e();
                });
                return (
                    t.observe(O.current),
                    t.observe(h.current),
                    () => {
                        t.disconnect();
                    }
                );
            }
        }, [p]),
        0 === o.length && !(f > 0))
    )
        return null != t
            ? (0, i.jsx)(D, {
                  activity: t,
                  isFocused: n,
              })
            : null;
    let [y, v, S] = o,
        j = "";
    1 === o.length
        ? (j = x.intl.format(x.t.lJ9sZX, { a: y }))
        : 2 === o.length
          ? (j = x.intl.format(x.t.rB0CUa, {
                a: y,
                b: v,
            }))
          : 3 === o.length
            ? (j = x.intl.format(x.t.StKThj, {
                  a: y,
                  b: v,
                  c: S,
              }))
            : o.length > 3 && (j = x.intl.format(x.t.Q8lUnE, {}));
    let I = m && o.length > 0 && o.length <= 3 ? x.intl.format(x.t["qD/0qZ"], {}) : j;
    return (0, i.jsxs)("div", {
        className: l()(
            w.typing,
            {
                "stop-animation": !n,
                [w.inTextChannel]: p,
            },
            s,
        ),
        children: [
            (0, i.jsxs)("div", {
                className: w.typingDots,
                ref: O,
                children: [
                    o.length > 0 &&
                        !1 !== u &&
                        (0, i.jsx)(d.bbz, {
                            className: w.ellipsis,
                            dotRadius: 3.5,
                            themed: !0,
                        }),
                    (0, i.jsx)("span", {
                        className: w.text,
                        "aria-live": "polite",
                        "aria-atomic": !0,
                        children: I,
                    }),
                    (0, i.jsx)("span", {
                        className: w.text,
                        style: {
                            position: "absolute",
                            visibility: "hidden",
                        },
                        "aria-hidden": !0,
                        ref: h,
                        children: j,
                    }),
                ],
            }),
            (0, i.jsx)(b.Z, {
                channel: a,
                isThreadCreation: c,
            }),
        ],
    });
}
function _(e) {
    let t = (0, c.e7)([y.Z], () => y.Z.getTypingUsers(e.id)),
        n = (0, c.e7)([v.default], () => v.default.getCurrentUser());
    return a()(t)
        .keys()
        .filter((e) => e !== (null == n ? void 0 : n.id))
        .reject((e) => m.Z.isBlockedOrIgnored(e))
        .map((e) => v.default.getUser(e))
        .filter(I.lm)
        .map((t) => Z.ZP.getName(e.guild_id, e.id, t))
        .value();
}
function k(e) {
    let t = (0, c.e7)([g.Z], () => g.Z.findActivity((e) => null != e.application_id));
    return (0, c.e7)([h.Z, O.Z, m.Z], () => (0, f.Z)(e, t, h.Z, O.Z, m.Z)) ? t : null;
}
function A(e) {
    var t,
        n,
        { channel: r, isThreadCreation: o = !1 } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (i = 0; i < o.length; i++)
                    (n = o[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["channel", "isThreadCreation"]);
    let s = _(r),
        a =
            ((t = T({}, l)),
            (n = n =
                {
                    baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                    activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                    activityInviteEducationActivity: k(r),
                    typingUsers: o ? [] : s,
                    isFocused: (0, c.e7)([S.Z], () => S.Z.isFocused()),
                    guildId: r.guild_id,
                    channel: r,
                    isThreadCreation: o,
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
    return (0, i.jsx)(N, T({}, a));
}
