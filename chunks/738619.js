i.d(t, {
    ZP: () => R,
    d7: () => U,
    iD: () => D,
}),
    i(539854),
    i(388685);
var n = i(951288),
    r = i(647438),
    s = i(120356),
    o = i.n(s),
    l = i(392711),
    a = i.n(l),
    d = i(442837),
    c = i(692547),
    u = i(481060),
    h = i(980568),
    p = i(560768),
    g = i(812206),
    m = i(405701),
    f = i(843693),
    v = i(246642),
    O = i(624030),
    b = i(314897),
    S = i(699516),
    y = i(885110),
    E = i(111583),
    T = i(594174),
    I = i(451478),
    w = i(626135),
    Z = i(823379),
    C = i(5192),
    P = i(981631),
    j = i(388032),
    x = i(458182);
function _(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                _(e, t, i[t]);
            });
    }
    return e;
}
let N = [];
class M extends r.PureComponent {
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
            -1 === N.indexOf(e) &&
            (w.default.track(P.rMx.SHOW_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
            }),
            N.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e } = this.props;
        return (0, n.jsxs)("div", {
            className: o()(x.activityInviteEducation, { [x.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, n.jsx)("div", { className: x.activityInviteEducationArrow }),
                (0, n.jsx)("span", {
                    children: j.intl.format(j.t["i/MoCg"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "state", { fadeIn: !1 }),
            _(this, "timeout", null),
            _(this, "handleDismissInviteEducation", () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && h.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function F(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: i,
            typingUsers: s,
            className: l,
            channel: a,
            isThreadCreation: d,
            renderDots: c,
            poggermodeEnabled: h,
            isComboing: p,
            isInTextChannel: g,
        } = e,
        { rateLimitPerUser: f } = a,
        O = r.useRef(null),
        b = r.useRef(null),
        [S, y] = r.useState(!1);
    if (
        (r.useLayoutEffect(() => {
            if (null != O.current && null != b.current && g) {
                let e = () => {
                    if (null != O.current && null != b.current) {
                        let e = O.current.getBoundingClientRect();
                        b.current.scrollWidth + 48 > e.width ? y(!0) : y(!1);
                    }
                };
                e();
                let t = new ResizeObserver(() => {
                    e();
                });
                return (
                    t.observe(O.current),
                    t.observe(b.current),
                    () => {
                        t.disconnect();
                    }
                );
            }
        }, [g]),
        0 === s.length && !(f > 0) && !p)
    )
        return null != t
            ? (0, n.jsx)(M, {
                  activity: t,
                  isFocused: i,
              })
            : null;
    let [E, T, I] = s,
        w = "";
    1 === s.length
        ? (w = j.intl.format(j.t.lJ9sZW, { a: E }))
        : 2 === s.length
          ? (w = j.intl.format(j.t.rB0CUV, {
                a: E,
                b: T,
            }))
          : 3 === s.length
            ? (w = j.intl.format(j.t.StKTho, {
                  a: E,
                  b: T,
                  c: I,
              }))
            : s.length > 3 && (w = j.intl.format(j.t.Q8lUnJ, {}));
    let Z = S && s.length > 0 && s.length <= 3 ? j.intl.format(j.t["qD/0qa"], {}) : w;
    return (0, n.jsxs)("div", {
        className: o()(
            x.typing,
            {
                "stop-animation": !i,
                [x.isComboing]: h && p,
                [x.inTextChannel]: g,
            },
            l,
        ),
        children: [
            (0, n.jsxs)("div", {
                className: x.typingDots,
                ref: O,
                children: [
                    s.length > 0 &&
                        !1 !== c &&
                        (0, n.jsx)(u.bbz, {
                            className: x.ellipsis,
                            dotRadius: 3.5,
                            themed: !0,
                        }),
                    (0, n.jsx)("span", {
                        className: x.text,
                        "aria-live": "polite",
                        "aria-atomic": !0,
                        children: Z,
                    }),
                    (0, n.jsx)("span", {
                        className: x.text,
                        style: {
                            position: "absolute",
                            visibility: "hidden",
                        },
                        "aria-hidden": !0,
                        ref: b,
                        children: w,
                    }),
                ],
            }),
            (0, n.jsx)(m.Z, {
                channel: a,
                isThreadCreation: d,
            }),
            h && p && (0, n.jsx)(v.Z, { channelId: a.id }),
        ],
    });
}
function D(e) {
    let t = (0, d.e7)([E.Z], () => E.Z.getTypingUsers(e.id)),
        i = (0, d.e7)([T.default], () => T.default.getCurrentUser());
    return a()(t)
        .keys()
        .filter((e) => e !== (null == i ? void 0 : i.id))
        .reject((e) => S.Z.isBlockedOrIgnored(e))
        .map((e) => T.default.getUser(e))
        .filter(Z.lm)
        .map((t) => C.ZP.getName(e.guild_id, e.id, t))
        .value();
}
function U(e) {
    let t = (0, d.e7)([y.Z], () => y.Z.findActivity((e) => null != e.application_id));
    return (0, d.e7)([O.Z, g.Z, S.Z], () => (0, p.Z)(e, t, O.Z, g.Z, S.Z)) ? t : null;
}
function R(e) {
    var t,
        i,
        { channel: r, isThreadCreation: s = !1 } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var i,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var i,
                        n,
                        r = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (i = s[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++)
                    (i = s[n]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
            }
            return r;
        })(e, ["channel", "isThreadCreation"]);
    let l = (0, d.e7)([f.ZP, b.default], () => f.ZP.getUserCombo(b.default.getId(), r.id)),
        a = D(r),
        h =
            ((t = A({}, o)),
            (i = i =
                {
                    baseTextColor: (0, u.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
                    activeTextColor: (0, u.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
                    activityInviteEducationActivity: U(r),
                    typingUsers: s ? [] : a,
                    isFocused: (0, d.e7)([I.Z], () => I.Z.isFocused()),
                    guildId: r.guild_id,
                    isComboing: null != l,
                    channel: r,
                    isThreadCreation: s,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                : (function (e, t) {
                      var i = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          i.push.apply(i, n);
                      }
                      return i;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            t);
    return (0, n.jsx)(F, A({}, h));
}
