i.d(e, {
    ZP: () => R,
    d7: () => U,
    iD: () => M,
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
    u = i(692547),
    c = i(481060),
    h = i(980568),
    p = i(560768),
    g = i(812206),
    f = i(405701),
    m = i(843693),
    v = i(246642),
    O = i(624030),
    b = i(314897),
    S = i(699516),
    y = i(885110),
    E = i(111583),
    I = i(594174),
    Z = i(451478),
    w = i(626135),
    P = i(823379),
    T = i(5192),
    C = i(981631),
    j = i(388032),
    x = i(458182);
function _(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = i),
        t
    );
}
function A(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                }),
            )),
            n.forEach(function (e) {
                _(t, e, i[e]);
            });
    }
    return t;
}
let N = [];
class F extends r.PureComponent {
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ fadeIn: !0 }), (this.timeout = null), this.logShownEventIfNeeded();
        }, 100);
    }
    componentDidUpdate() {
        this.logShownEventIfNeeded();
    }
    logShownEventIfNeeded() {
        let t = this.props.activity.application_id;
        null != t &&
            -1 === N.indexOf(t) &&
            (w.default.track(C.rMx.SHOW_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: t,
            }),
            N.push(t));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: t } = this.props;
        return (0, n.jsxs)("div", {
            className: o()(x.activityInviteEducation, { [x.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, n.jsx)("div", { className: x.activityInviteEducationArrow }),
                (0, n.jsx)("span", {
                    children: j.intl.format(j.t["i/MoCg"], {
                        game: t.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
    constructor(...t) {
        super(...t),
            _(this, "state", { fadeIn: !1 }),
            _(this, "timeout", null),
            _(this, "handleDismissInviteEducation", () => {
                let { activity: t } = this.props;
                null != t && null != t.application_id && h.Z.dismissForApplicationId(t.application_id);
            });
    }
}
function D(t) {
    let {
            activityInviteEducationActivity: e,
            isFocused: i,
            typingUsers: s,
            className: l,
            channel: a,
            isThreadCreation: d,
            renderDots: u,
            poggermodeEnabled: h,
            isComboing: p,
            isInTextChannel: g,
        } = t,
        { rateLimitPerUser: m } = a,
        O = r.useRef(null),
        b = r.useRef(null),
        [S, y] = r.useState(!1);
    if (
        (r.useLayoutEffect(() => {
            if (null != O.current && null != b.current && g) {
                let t = () => {
                    if (null != O.current && null != b.current) {
                        let t = O.current.getBoundingClientRect();
                        b.current.scrollWidth + 48 > t.width ? y(!0) : y(!1);
                    }
                };
                t();
                let e = new ResizeObserver(() => {
                    t();
                });
                return (
                    e.observe(O.current),
                    e.observe(b.current),
                    () => {
                        e.disconnect();
                    }
                );
            }
        }, [g]),
        0 === s.length && !(m > 0) && !p)
    )
        return null != e
            ? (0, n.jsx)(F, {
                  activity: e,
                  isFocused: i,
              })
            : null;
    let [E, I, Z] = s,
        w = "";
    1 === s.length
        ? (w = j.intl.format(j.t.lJ9sZW, { a: E }))
        : 2 === s.length
          ? (w = j.intl.format(j.t.rB0CUV, {
                a: E,
                b: I,
            }))
          : 3 === s.length
            ? (w = j.intl.format(j.t.StKTho, {
                  a: E,
                  b: I,
                  c: Z,
              }))
            : s.length > 3 && (w = j.intl.format(j.t.Q8lUnJ, {}));
    let P = S && s.length > 0 && s.length <= 3 ? j.intl.format(j.t["qD/0qa"], {}) : w;
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
                        !1 !== u &&
                        (0, n.jsx)(c.bbz, {
                            className: x.ellipsis,
                            dotRadius: 3.5,
                            themed: !0,
                        }),
                    (0, n.jsx)("span", {
                        className: x.text,
                        "aria-live": "polite",
                        "aria-atomic": !0,
                        children: P,
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
            (0, n.jsx)(f.Z, {
                channel: a,
                isThreadCreation: d,
            }),
            h && p && (0, n.jsx)(v.Z, { channelId: a.id }),
        ],
    });
}
function M(t) {
    let e = (0, d.e7)([E.Z], () => E.Z.getTypingUsers(t.id)),
        i = (0, d.e7)([I.default], () => I.default.getCurrentUser());
    return a()(e)
        .keys()
        .filter((t) => t !== (null == i ? void 0 : i.id))
        .reject((t) => S.Z.isBlockedOrIgnored(t))
        .map((t) => I.default.getUser(t))
        .filter(P.lm)
        .map((e) => T.ZP.getName(t.guild_id, t.id, e))
        .value();
}
function U(t) {
    let e = (0, d.e7)([y.Z], () => y.Z.findActivity((t) => null != t.application_id));
    return (0, d.e7)([O.Z, g.Z, S.Z], () => (0, p.Z)(t, e, O.Z, g.Z, S.Z)) ? e : null;
}
function R(t) {
    var e,
        i,
        { channel: r, isThreadCreation: s = !1 } = t,
        o = (function (t, e) {
            if (null == t) return {};
            var i,
                n,
                r = (function (t, e) {
                    if (null == t) return {};
                    var i,
                        n,
                        r = {},
                        s = Object.keys(t);
                    for (n = 0; n < s.length; n++) (i = s[n]), e.indexOf(i) >= 0 || (r[i] = t[i]);
                    return r;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                for (n = 0; n < s.length; n++)
                    (i = s[n]),
                        !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i]);
            }
            return r;
        })(t, ["channel", "isThreadCreation"]);
    let l = (0, d.e7)([m.ZP, b.default], () => m.ZP.getUserCombo(b.default.getId(), r.id)),
        a = M(r),
        h =
            ((e = A({}, o)),
            (i = i =
                {
                    baseTextColor: (0, c.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
                    activeTextColor: (0, c.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
                    activityInviteEducationActivity: U(r),
                    typingUsers: s ? [] : a,
                    isFocused: (0, d.e7)([Z.Z], () => Z.Z.isFocused()),
                    guildId: r.guild_id,
                    isComboing: null != l,
                    channel: r,
                    isThreadCreation: s,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                : (function (t, e) {
                      var i = Object.keys(t);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(t);
                          i.push.apply(i, n);
                      }
                      return i;
                  })(Object(i)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                  }),
            e);
    return (0, n.jsx)(D, A({}, h));
}
