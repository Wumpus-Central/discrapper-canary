(o.r(t), o.d(t, { default: () => k }));
var e,
    i = o(477900),
    r = o(582128),
    s = o(935462),
    c = o(430690),
    l = o(670404),
    a =
        (((e = {}).PLAYSTATION = "https://discord.com/connections/playstation/link"),
        (e.PLAYSTATION_STAGING = "https://discord.com/connections/playstation-stg/link"),
        e),
    d = o(333748),
    p = o(910316),
    C = o(652215),
    T = o(544105);
function g(n) {
    let { platformType: t, authToken: o, onContinue: e, onError: r, onClose: s } = n,
        c = t === C.fg2.PLAYSTATION_STAGING ? d.i.PLAYSTATION_STAGING_APPLICATION_ID : d.i.PLAYSTATION_APPLICATION_ID,
        l = t === C.fg2.PLAYSTATION_STAGING ? a.PLAYSTATION_STAGING : a.PLAYSTATION;
    return (0, i.jsx)(p.W, {
        platformType: t,
        clientId: c,
        scopes: T.NL,
        authToken: o,
        onContinue: e,
        onError: r,
        onClose: s,
        redirectUri: l,
    });
}
var h = o(478474),
    N = o(792996);
function A(n) {
    let { onContinue: t, onClose: o, errorCode: e } = n,
        r = e === C.t02.UNDER_MINIMUM_AGE ? N.intl.string(N.t["3dIn2A"]) : N.intl.string(N.t.qE9nqE);
    return (0, i.jsx)(h.s, { title: N.intl.string(N.t.eY3qHd), body: r, onClose: o, onContinue: t });
}
var I = o(983851),
    u = o(687966),
    b = o(975571),
    f = o(458172);
function m(n) {
    let { platformType: t, onContinue: o, onClose: e } = n,
        s = r.useMemo(
            () => [
                {
                    label: N.intl.string(N.t["+eJP7o"]),
                    subLabel: N.intl.string(N.t["+0VIUh"]),
                    icon: I.VoiceNormalIcon,
                },
                { label: N.intl.string(N.t.ZH4QFa), icon: u.GameControllerIcon },
            ],
            [],
        ),
        c = b.A.getArticleURL(C.MVz.PS_CONNECTION),
        l = N.intl.format(N.t.kqZQNe, { helpdeskArticleUrl: c });
    return (0, i.jsx)(f.B, {
        platformType: t,
        headerConnect: N.intl.string(N.t.xAWHOy),
        headerReconnect: N.intl.string(N.t["ZJ/vBh"]),
        body: l,
        onClose: e,
        onContinue: o,
        img: (0, i.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/09152e47812b0b36abe406a49de1cc71ebae44cd025b7f7ce471ecf1bd152285.png",
            width: 230,
            height: 160,
            alt: "",
        }),
        valueProps: s,
    });
}
var x = o(873885);
function S(n) {
    let {
            platformType: t,
            isWaitingForConnection: o,
            onWaitingForConnection: e,
            expectedCallbackState: r,
            onAuthToken: s,
            onError: c,
            onClose: l,
        } = n,
        a = o
            ? (0, i.jsx)("img", {
                  src: "https://cdn.discordapp.com/assets/content/0784339e68320272c6863d3ceb5170eba05ce95a3b5e362086da529fc3f8bfff.png",
                  width: "231",
                  height: "172",
                  alt: "",
              })
            : (0, i.jsx)("img", {
                  src: "https://cdn.discordapp.com/assets/content/e204d2bb762737c619e51cd81d31c6e7fd615fa2ddd459c52ce5fb52a86d44e8.png",
                  width: "231",
                  height: "160",
                  alt: "",
              }),
        d = o ? N.intl.string(N.t.TTIocg) : N.intl.string(N.t["6n+UPR"]),
        p = o ? N.intl.string(N.t.MNmoKH) : N.intl.string(N.t.JaaqIf);
    return (0, i.jsx)(x.b, {
        platformType: t,
        isWaitingForConnection: o,
        onWaitingForConnection: e,
        expectedCallbackState: r,
        onAuthToken: s,
        onError: c,
        onClose: l,
        img: a,
        title: d,
        body: p,
    });
}
var j = o(162185),
    O = o(326513);
function P(n) {
    let { onClose: t } = n;
    return (0, i.jsx)(j.b, {
        img: (0, i.jsx)("img", { src: O.A, width: "124 ", height: "160", alt: "" }),
        title: N.intl.string(N.t.e6SOl0),
        body: N.intl.string(N.t.QjAZAQ),
        onClose: t,
    });
}
var E = o(52643),
    _ = o(844768);
function k(n) {
    let { transitionState: t, onClose: o, analyticsLocation: e, platformType: r, pendingCallbackState: a } = n,
        {
            slide: d,
            gotoNext: p,
            gotoError: C,
            handleWaitingForConnection: T,
            handleAuthToken: h,
            expectedCallbackState: N,
            callbackData: I,
            errorCode: u,
        } = (0, l.m)(e, r, a);
    return (0, i.jsx)(s.EO, {
        "data-migration-pending": !0,
        className: _.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "PlayStationLinkModal",
        children: (0, i.jsxs)(c.t, {
            activeSlide: d,
            width: 408,
            children: [
                (0, i.jsx)(c.q, {
                    id: E.N.LANDING,
                    children: (0, i.jsx)(m, { platformType: r, onContinue: p, onClose: o }),
                }),
                (0, i.jsx)(c.q, {
                    id: E.N.PRE_CONNECT,
                    children: (0, i.jsx)(S, {
                        platformType: r,
                        isWaitingForConnection: !1,
                        onWaitingForConnection: T,
                        onAuthToken: h,
                        onError: C,
                        onClose: o,
                    }),
                }),
                (0, i.jsx)(c.q, {
                    id: E.N.PRE_CONNECT_WAITING,
                    children: (0, i.jsx)(S, {
                        platformType: r,
                        isWaitingForConnection: !0,
                        onWaitingForConnection: T,
                        expectedCallbackState: N,
                        onAuthToken: h,
                        onError: C,
                        onClose: o,
                    }),
                }),
                (0, i.jsx)(c.q, {
                    id: E.N.DISCORD_CONSENT,
                    children: (0, i.jsx)(g, { platformType: r, authToken: I, onContinue: p, onError: C, onClose: o }),
                }),
                (0, i.jsx)(c.q, {
                    id: E.N.ERROR,
                    children: (0, i.jsx)(A, { onContinue: p, onClose: o, errorCode: u }),
                }),
                (0, i.jsx)(c.q, { id: E.N.SUCCESS, children: (0, i.jsx)(P, { onClose: o }) }),
            ],
        }),
    });
}
