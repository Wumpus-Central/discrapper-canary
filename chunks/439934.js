n.d(t, { Z: () => L }), n(47120), n(266796);
var a = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    r = n(442837),
    c = n(481060),
    o = n(239091),
    d = n(434650),
    u = n(895924),
    p = n(70097),
    f = n(695346),
    g = n(594174),
    m = n(695103),
    v = n(880448),
    h = n(823379),
    b = n(5192),
    x = n(624138),
    _ = n(115130),
    C = n(147865),
    I = n(542094),
    y = n(665811),
    T = n(182906),
    j = n(556505),
    N = n(513202),
    Z = n(884338),
    S = n(823531),
    O = n(388032),
    E = n(715614),
    A = n(969728);
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function P(e) {
    let { value: t, icon: n } = e;
    return (0, a.jsxs)(c.Text, {
        className: E.activityTag,
        color: 'interactive-normal',
        variant: 'text-xs/semibold',
        children: [(0, h.lm)(n) ? (0, a.jsx)(n, { className: E.icon }) : null, t]
    });
}
function w(e) {
    let { activity: t, application: n, context: i, guildId: l, large: s = !1 } = e,
        o = 'channel' === i.type ? i.channel : void 0,
        d = (0, r.Wu)([g.default], () => {
            var e;
            return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : [])
                .map((e) => {
                    let [t] = e;
                    return g.default.getUser(t);
                })
                .filter(h.lm);
        }),
        u = b.ZP.getName(l, null == o ? void 0 : o.id, null == d ? void 0 : d[0]);
    if (((u = (0, x.aF)(u, 15)), null == t || 0 === d.length)) {
        var p, f;
        let e = ''.concat((0, C.ZP)(null !== (p = n.maxParticipants) && void 0 !== p ? p : 0));
        return (
            s && (e = null !== (f = n.description) && void 0 !== f ? f : ''),
            (0, a.jsx)(c.Text, {
                className: E.activitySubtitleText,
                variant: 'text-xs/normal',
                color: 'interactive-normal',
                children: e
            })
        );
    }
    return (0, a.jsxs)('div', {
        className: E.activitySubtitleText,
        children: [
            (0, a.jsx)(c.Text, {
                className: E.usersArePlayingText,
                variant: 'text-xs/normal',
                children:
                    d.length > 1
                        ? O.NW.formatToPlainString(O.t.cpe6CA, {
                              username: u,
                              count: d.length - 1
                          })
                        : O.NW.formatToPlainString(O.t['7Uuia2'], { username: u })
            }),
            (0, a.jsx)(Z.Z, {
                size: s ? Z.u.SIZE_24 : Z.u.SIZE_16,
                guildId: l,
                users: d,
                max: 6
            })
        ]
    });
}
function L(e) {
    var t;
    let { activityItem: n, context: l, guildId: g, locationObject: h, onActivityItemVisible: b, onActivityItemSelected: x, large: Z = !1 } = e,
        {
            imageBackground: L,
            videoUrl: k,
            activityAction: D,
            joinableEmbeddedApp: W,
            onActivityItemSelected: R,
            labelType: F,
            staffReleasePhase: B
        } = (0, I.ZP)({
            activityItem: n,
            context: l,
            guildId: g,
            locationObject: h,
            onActivityItemVisible: b,
            onActivityItemSelected: x,
            embeddedActivitiesManager: N.Z,
            commandOrigin: u.bB.APPLICATION_LAUNCHER
        }),
        V = (0, r.e7)([_.Z, m.Z], () => _.Z.inDevModeForApplication(n.application.id) || m.Z.inTestModeForApplication(n.application.id), [n.application.id]),
        { application: H } = n,
        U = i.useCallback((e) => e && (null == b ? void 0 : b({ applicationId: n.application.id })), [n.application.id, b]),
        Y = (0, d.O)(U, 0.8, !0),
        [G, z] = i.useState(!1),
        [q, J] = i.useState(G);
    i.useEffect(() => {
        G && J(!0);
    }, [G]);
    let X = () => z(!0),
        $ = () => z(!1),
        Q = f.Sb.useSetting(),
        K = i.useCallback(() => {
            null == R || R();
        }, [R]);
    return (0, a.jsxs)(c.P3F, {
        onClick: D === I.JS.START ? K : void 0,
        onContextMenu: Q
            ? (e) => {
                  (0, o.vq)(e, (e) => (0, a.jsx)(S.Z, M({ application: H }, e)));
              }
            : void 0,
        className: s()(E.activityItem, {
            [E.large]: !0 === Z,
            [E.disabled]: D !== I.JS.START
        }),
        children: [
            (0, a.jsxs)('div', {
                ref: Y,
                className: s()(E.activityImageContainer, { [E.large]: !0 === Z }),
                onMouseEnter: X,
                onFocus: X,
                onMouseLeave: $,
                onBlur: $,
                children: [
                    (0, a.jsx)(T.Z, {
                        imageBackground: L,
                        applicationName: H.name,
                        imageClassName: s()(E.activityImage, { [E.large]: !0 === Z }),
                        imageNotFoundClassName: E.brokenImageIconWrapper
                    }),
                    null != k && q && D === I.JS.START
                        ? (0, a.jsx)('div', {
                              className: s()(E.activityVideo, { [E.videoFadeOut]: !G }),
                              onAnimationEnd: () => (G ? null : J(!1)),
                              children: (0, a.jsx)(p.Z, {
                                  className: E.activityVideo,
                                  src: k,
                                  loop: !0,
                                  autoPlay: !0,
                                  muted: !0
                              })
                          })
                        : null,
                    D !== I.JS.START
                        ? (0, a.jsx)(y.U, {
                              action: D,
                              onClick: K
                          })
                        : null,
                    (0, a.jsx)('div', {
                        className: E.overlayBadge,
                        children: (0, a.jsx)('div', {
                            className: E.badgeContainer,
                            children: (0, a.jsx)(j.Z, {
                                name: H.name,
                                labelType: F
                            })
                        })
                    }),
                    V
                        ? (0, a.jsx)(c.ua7, {
                              text: O.NW.string(O.t.CfTySU),
                              children: (e) => {
                                  var t, n;
                                  return (0, a.jsx)(
                                      'div',
                                      ((t = M({ className: E.devShelfBadge }, e)),
                                      (n = n = { children: (0, a.jsx)(v.Z, { className: E.devShelfIcon }) }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var a = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, a);
                                                }
                                                return n;
                                            })(Object(n)).forEach(function (e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                            }),
                                      t)
                                  );
                              }
                          })
                        : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: s()(E.activityTextContainer, { [E.large]: Z }),
                children: [
                    Z
                        ? (0, a.jsx)(c.Text, {
                              className: E.activityMaxParticipantsLarge,
                              variant: 'text-xs/normal',
                              color: 'interactive-normal',
                              children: (0, C.ZP)(null !== (t = H.maxParticipants) && void 0 !== t ? t : 0)
                          })
                        : null,
                    (0, a.jsxs)('div', {
                        className: E.activityName,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                className: E.activityTitleText,
                                variant: 'heading-md/semibold',
                                color: 'interactive-active',
                                children: H.name
                            }),
                            null != B
                                ? (0, a.jsx)(c.ua7, {
                                      text: B,
                                      children: (e) =>
                                          (0, a.jsx)(
                                              'img',
                                              M(
                                                  {
                                                      className: E.staffBadge,
                                                      alt: B,
                                                      src: A
                                                  },
                                                  e
                                              )
                                          )
                                  })
                                : null
                        ]
                    }),
                    (0, a.jsx)(w, {
                        activity: null == W ? void 0 : W.embeddedActivity,
                        application: H,
                        context: l,
                        guildId: g,
                        large: Z
                    }),
                    (0, a.jsx)('div', {
                        className: E.activityTagsContainer,
                        children: H.tags.slice(0, 3).map((e) => (0, a.jsx)(P, { value: e }, 'activity-tag-'.concat(H.id, '-').concat(e)))
                    })
                ]
            })
        ]
    });
}
