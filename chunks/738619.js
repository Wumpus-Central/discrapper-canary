n.d(t, {
    ZP: () => U,
    d7: () => R,
    iD: () => M,
}),
    n(539854),
    n(388685);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    l = n.n(o),
    s = n(392711),
    a = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    f = n(980568),
    p = n(560768),
    b = n(812206),
    O = n(405701),
    m = n(843693),
    g = n(246642),
    v = n(624030),
    y = n(314897),
    h = n(699516),
    j = n(885110),
    S = n(111583),
    Z = n(594174),
    x = n(451478),
    I = n(626135),
    P = n(823379),
    w = n(5192),
    E = n(981631),
    C = n(388032),
    N = n(458182);
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
                T(e, t, n[t]);
            });
    }
    return e;
}
let _ = [];
class k extends i.PureComponent {
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
            -1 === _.indexOf(e) &&
            (I.default.track(E.rMx.SHOW_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
            }),
            _.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e } = this.props;
        return (0, r.jsxs)("div", {
            className: l()(N.activityInviteEducation, { [N.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, r.jsx)("div", { className: N.activityInviteEducationArrow }),
                (0, r.jsx)("span", {
                    children: C.intl.format(C.t["i/MoCg"], {
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
                null != e && null != e.application_id && f.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function A(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: n,
            typingUsers: o,
            className: s,
            channel: a,
            isThreadCreation: c,
            renderDots: u,
            poggermodeEnabled: f,
            isComboing: p,
            isInTextChannel: b,
        } = e,
        { rateLimitPerUser: m } = a,
        v = i.useRef(null),
        y = i.useRef(null),
        [h, j] = i.useState(!1);
    if (
        (i.useLayoutEffect(() => {
            if (null != v.current && null != y.current && b) {
                let e = () => {
                    if (null != v.current && null != y.current) {
                        let e = v.current.getBoundingClientRect();
                        y.current.scrollWidth + 48 > e.width ? j(!0) : j(!1);
                    }
                };
                e();
                let t = new ResizeObserver(() => {
                    e();
                });
                return (
                    t.observe(v.current),
                    t.observe(y.current),
                    () => {
                        t.disconnect();
                    }
                );
            }
        }, [b]),
        0 === o.length && !(m > 0) && !p)
    )
        return null != t
            ? (0, r.jsx)(k, {
                  activity: t,
                  isFocused: n,
              })
            : null;
    let [S, Z, x] = o,
        I = "";
    1 === o.length
        ? (I = C.intl.format(C.t.lJ9sZW, { a: S }))
        : 2 === o.length
          ? (I = C.intl.format(C.t.rB0CUV, {
                a: S,
                b: Z,
            }))
          : 3 === o.length
            ? (I = C.intl.format(C.t.StKTho, {
                  a: S,
                  b: Z,
                  c: x,
              }))
            : o.length > 3 && (I = C.intl.format(C.t.Q8lUnJ, {}));
    let P = h && o.length > 0 && o.length <= 3 ? C.intl.format(C.t["qD/0qa"], {}) : I;
    return (0, r.jsxs)("div", {
        className: l()(
            N.typing,
            {
                "stop-animation": !n,
                [N.isComboing]: f && p,
                [N.inTextChannel]: b,
            },
            s,
        ),
        children: [
            (0, r.jsxs)("div", {
                className: N.typingDots,
                ref: v,
                children: [
                    o.length > 0 &&
                        !1 !== u &&
                        (0, r.jsx)(d.bbz, {
                            className: N.ellipsis,
                            dotRadius: 3.5,
                            themed: !0,
                        }),
                    (0, r.jsx)("span", {
                        className: N.text,
                        "aria-live": "polite",
                        "aria-atomic": !0,
                        children: P,
                    }),
                    (0, r.jsx)("span", {
                        className: N.text,
                        style: {
                            position: "absolute",
                            visibility: "hidden",
                        },
                        "aria-hidden": !0,
                        ref: y,
                        children: I,
                    }),
                ],
            }),
            (0, r.jsx)(O.Z, {
                channel: a,
                isThreadCreation: c,
            }),
            f && p && (0, r.jsx)(g.Z, { channelId: a.id }),
        ],
    });
}
function M(e) {
    let t = (0, c.e7)([S.Z], () => S.Z.getTypingUsers(e.id)),
        n = (0, c.e7)([Z.default], () => Z.default.getCurrentUser());
    return a()(t)
        .keys()
        .filter((e) => e !== (null == n ? void 0 : n.id))
        .reject((e) => h.Z.isBlockedOrIgnored(e))
        .map((e) => Z.default.getUser(e))
        .filter(P.lm)
        .map((t) => w.ZP.getName(e.guild_id, e.id, t))
        .value();
}
function R(e) {
    let t = (0, c.e7)([j.Z], () => j.Z.findActivity((e) => null != e.application_id));
    return (0, c.e7)([v.Z, b.Z, h.Z], () => (0, p.Z)(e, t, v.Z, b.Z, h.Z)) ? t : null;
}
function U(e) {
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
    let s = (0, c.e7)([m.ZP, y.default], () => m.ZP.getUserCombo(y.default.getId(), i.id)),
        a = M(i),
        f =
            ((t = D({}, l)),
            (n = n =
                {
                    baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
                    activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
                    activityInviteEducationActivity: R(i),
                    typingUsers: o ? [] : a,
                    isFocused: (0, c.e7)([x.Z], () => x.Z.isFocused()),
                    guildId: i.guild_id,
                    isComboing: null != s,
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
    return (0, r.jsx)(A, D({}, f));
}
