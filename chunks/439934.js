n.d(t, { Z: () => k }), n(47120);
var a = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    c = n(442837),
    o = n(481060),
    r = n(239091),
    d = n(434650),
    u = n(895924),
    p = n(70097),
    m = n(695346),
    g = n(594174),
    f = n(695103),
    v = n(880448),
    h = n(823379),
    x = n(5192),
    _ = n(624138),
    b = n(115130),
    C = n(147865),
    I = n(542094),
    T = n(665811),
    Z = n(182906),
    S = n(556505),
    y = n(513202),
    N = n(884338),
    j = n(823531),
    E = n(388032),
    A = n(862924),
    M = n(969728);
function O(e) {
    let { value: t, icon: n } = e;
    return (0, a.jsxs)(o.Text, {
        className: A.activityTag,
        color: 'interactive-normal',
        variant: 'text-xs/semibold',
        children: [(0, h.lm)(n) ? (0, a.jsx)(n, { className: A.icon }) : null, t]
    });
}
function L(e) {
    let { activity: t, application: n, context: i, guildId: l, large: s = !1 } = e,
        r = 'channel' === i.type ? i.channel : void 0,
        d = (0, c.Wu)([g.default], () => {
            var e;
            return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : [])
                .map((e) => {
                    let [t] = e;
                    return g.default.getUser(t);
                })
                .filter(h.lm);
        }),
        u = x.ZP.getName(l, null == r ? void 0 : r.id, null == d ? void 0 : d[0]);
    if (((u = (0, _.aF)(u, 15)), null == t || 0 === d.length)) {
        var p, m;
        let e = ''.concat((0, C.ZP)(null !== (p = n.maxParticipants) && void 0 !== p ? p : 0));
        return (
            s && (e = null !== (m = n.description) && void 0 !== m ? m : ''),
            (0, a.jsx)(o.Text, {
                className: A.activitySubtitleText,
                variant: 'text-xs/normal',
                color: 'interactive-normal',
                children: e
            })
        );
    }
    return (0, a.jsxs)('div', {
        className: A.activitySubtitleText,
        children: [
            (0, a.jsx)(o.Text, {
                className: A.usersArePlayingText,
                variant: 'text-xs/normal',
                children:
                    d.length > 1
                        ? E.intl.formatToPlainString(E.t.cpe6CA, {
                              username: u,
                              count: d.length - 1
                          })
                        : E.intl.formatToPlainString(E.t['7Uuia2'], { username: u })
            }),
            (0, a.jsx)(N.Z, {
                size: s ? N.u.SIZE_24 : N.u.SIZE_16,
                guildId: l,
                users: d,
                max: 6
            })
        ]
    });
}
function k(e) {
    var t;
    let { activityItem: n, context: l, guildId: g, locationObject: h, onActivityItemVisible: x, onActivityItemSelected: _, large: N = !1 } = e,
        {
            imageBackground: k,
            videoUrl: w,
            activityAction: P,
            joinableEmbeddedApp: D,
            onActivityItemSelected: R,
            labelType: F,
            staffReleasePhase: B
        } = (0, I.ZP)({
            activityItem: n,
            context: l,
            guildId: g,
            locationObject: h,
            onActivityItemVisible: x,
            onActivityItemSelected: _,
            embeddedActivitiesManager: y.Z,
            commandOrigin: u.bB.APPLICATION_LAUNCHER
        }),
        V = (0, c.e7)([b.Z, f.Z], () => b.Z.inDevModeForApplication(n.application.id) || f.Z.inTestModeForApplication(n.application.id), [n.application.id]),
        { application: H } = n,
        U = i.useCallback((e) => e && (null == x ? void 0 : x({ applicationId: n.application.id })), [n.application.id, x]),
        Y = (0, d.O)(U, 0.8, !0),
        [G, z] = i.useState(!1),
        [W, q] = i.useState(G);
    i.useEffect(() => {
        G && q(!0);
    }, [G]);
    let J = () => z(!0),
        X = () => z(!1),
        $ = m.Sb.useSetting(),
        Q = i.useCallback(() => {
            null == R || R();
        }, [R]);
    return (0, a.jsxs)(o.P3F, {
        onClick: P === I.JS.START ? Q : void 0,
        onContextMenu: $
            ? (e) => {
                  (0, r.vq)(e, (e) =>
                      (0, a.jsx)(j.Z, {
                          application: H,
                          ...e
                      })
                  );
              }
            : void 0,
        className: s()(A.activityItem, {
            [A.large]: !0 === N,
            [A.disabled]: P !== I.JS.START
        }),
        children: [
            (0, a.jsxs)('div', {
                ref: Y,
                className: s()(A.activityImageContainer, { [A.large]: !0 === N }),
                onMouseEnter: J,
                onFocus: J,
                onMouseLeave: X,
                onBlur: X,
                children: [
                    (0, a.jsx)(Z.Z, {
                        imageBackground: k,
                        applicationName: H.name,
                        imageClassName: s()(A.activityImage, { [A.large]: !0 === N }),
                        imageNotFoundClassName: A.brokenImageIconWrapper
                    }),
                    null != w && W && P === I.JS.START
                        ? (0, a.jsx)('div', {
                              className: s()(A.activityVideo, { [A.videoFadeOut]: !G }),
                              onAnimationEnd: () => (G ? null : q(!1)),
                              children: (0, a.jsx)(p.Z, {
                                  className: A.activityVideo,
                                  src: w,
                                  loop: !0,
                                  autoPlay: !0,
                                  muted: !0
                              })
                          })
                        : null,
                    P !== I.JS.START
                        ? (0, a.jsx)(T.U, {
                              action: P,
                              onClick: Q
                          })
                        : null,
                    (0, a.jsx)('div', {
                        className: A.overlayBadge,
                        children: (0, a.jsx)('div', {
                            className: A.badgeContainer,
                            children: (0, a.jsx)(S.Z, {
                                name: H.name,
                                labelType: F
                            })
                        })
                    }),
                    V
                        ? (0, a.jsx)(o.ua7, {
                              text: E.intl.string(E.t.CfTySU),
                              children: (e) =>
                                  (0, a.jsx)('div', {
                                      className: A.devShelfBadge,
                                      ...e,
                                      children: (0, a.jsx)(v.Z, { className: A.devShelfIcon })
                                  })
                          })
                        : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: s()(A.activityTextContainer, { [A.large]: N }),
                children: [
                    N
                        ? (0, a.jsx)(o.Text, {
                              className: A.activityMaxParticipantsLarge,
                              variant: 'text-xs/normal',
                              color: 'interactive-normal',
                              children: (0, C.ZP)(null !== (t = H.maxParticipants) && void 0 !== t ? t : 0)
                          })
                        : null,
                    (0, a.jsxs)('div', {
                        className: A.activityName,
                        children: [
                            (0, a.jsx)(o.X6q, {
                                className: A.activityTitleText,
                                variant: 'heading-md/semibold',
                                color: 'interactive-active',
                                children: H.name
                            }),
                            null != B
                                ? (0, a.jsx)(o.ua7, {
                                      text: B,
                                      children: (e) =>
                                          (0, a.jsx)('img', {
                                              className: A.staffBadge,
                                              alt: B,
                                              src: M,
                                              ...e
                                          })
                                  })
                                : null
                        ]
                    }),
                    (0, a.jsx)(L, {
                        activity: null == D ? void 0 : D.embeddedActivity,
                        application: H,
                        context: l,
                        guildId: g,
                        large: N
                    }),
                    (0, a.jsx)('div', {
                        className: A.activityTagsContainer,
                        children: H.tags.slice(0, 3).map((e) => (0, a.jsx)(O, { value: e }, 'activity-tag-'.concat(H.id, '-').concat(e)))
                    })
                ]
            })
        ]
    });
}
