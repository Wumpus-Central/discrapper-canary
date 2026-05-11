e.d(n, { default: () => k });
var i,
    o = e(627968),
    s = e(64700),
    r = e(935462),
    c = e(430690),
    l = e(670404),
    a =
        (((i = {}).PLAYSTATION = "https://discord.com/connections/playstation/link"),
        (i.PLAYSTATION_STAGING = "https://discord.com/connections/playstation-stg/link"),
        i),
    d = e(333748),
    p = e(910316),
    T = e(652215),
    C = e(544105);
function g(t) {
    let { platformType: n, authToken: e, onContinue: i, onError: s, onClose: r } = t,
        c = n === T.fg2.PLAYSTATION_STAGING ? d.i.PLAYSTATION_STAGING_APPLICATION_ID : d.i.PLAYSTATION_APPLICATION_ID,
        l = n === T.fg2.PLAYSTATION_STAGING ? a.PLAYSTATION_STAGING : a.PLAYSTATION;
    return (0, o.jsx)(p.W, {
        platformType: n,
        clientId: c,
        scopes: C.NL,
        authToken: e,
        onContinue: i,
        onError: s,
        onClose: r,
        redirectUri: l,
    });
}
var h = e(478474),
    N = e(375708);
function A(t) {
    let { onContinue: n, onClose: e, errorCode: i } = t,
        s = i === T.t02.UNDER_MINIMUM_AGE ? N.intl.string(N.t["3dIn2A"]) : N.intl.string(N.t.qE9nqE);
    return (0, o.jsx)(h.s, { title: N.intl.string(N.t.eY3qHd), body: s, onClose: e, onContinue: n });
}
var u = e(983851),
    I = e(687966),
    b = e(975571),
    f = e(505134);
function m(t) {
    let { platformType: n, onContinue: e, onClose: i } = t,
        r = s.useMemo(
            () => [
                { label: N.intl.string(N.t["+eJP7o"]), subLabel: N.intl.string(N.t["+0VIUh"]), icon: u.H },
                { label: N.intl.string(N.t.ZH4QFa), icon: I._ },
            ],
            [],
        ),
        c = b.A.getArticleURL(T.MVz.PS_CONNECTION),
        l = N.intl.format(N.t.kqZQNe, { helpdeskArticleUrl: c });
    return (0, o.jsx)(f.B, {
        platformType: n,
        headerConnect: N.intl.string(N.t.xAWHOy),
        headerReconnect: N.intl.string(N.t["ZJ/vBh"]),
        body: l,
        onClose: i,
        onContinue: e,
        img: (0, o.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/09152e47812b0b36abe406a49de1cc71ebae44cd025b7f7ce471ecf1bd152285.png",
            width: 230,
            height: 160,
            alt: "",
        }),
        valueProps: r,
    });
}
var x = e(873885);
function S(t) {
    let {
            platformType: n,
            isWaitingForConnection: e,
            onWaitingForConnection: i,
            expectedCallbackState: s,
            onAuthToken: r,
            onError: c,
            onClose: l,
        } = t,
        a = e
            ? (0, o.jsx)("img", {
                  src: "https://cdn.discordapp.com/assets/content/0784339e68320272c6863d3ceb5170eba05ce95a3b5e362086da529fc3f8bfff.png",
                  width: "231",
                  height: "172",
                  alt: "",
              })
            : (0, o.jsx)("img", {
                  src: "https://cdn.discordapp.com/assets/content/e204d2bb762737c619e51cd81d31c6e7fd615fa2ddd459c52ce5fb52a86d44e8.png",
                  width: "231",
                  height: "160",
                  alt: "",
              }),
        d = e ? N.intl.string(N.t.TTIocg) : N.intl.string(N.t["6n+UPR"]),
        p = e ? N.intl.string(N.t.MNmoKH) : N.intl.string(N.t.JaaqIf);
    return (0, o.jsx)(x.b, {
        platformType: n,
        isWaitingForConnection: e,
        onWaitingForConnection: i,
        expectedCallbackState: s,
        onAuthToken: r,
        onError: c,
        onClose: l,
        img: a,
        title: d,
        body: p,
    });
}
var j = e(162185),
    O = e(326513);
function P(t) {
    let { onClose: n } = t;
    return (0, o.jsx)(j.b, {
        img: (0, o.jsx)("img", { src: O.A, width: "124 ", height: "160", alt: "" }),
        title: N.intl.string(N.t.e6SOl0),
        body: N.intl.string(N.t.QjAZAQ),
        onClose: n,
    });
}
var _ = e(52643),
    E = e(729727);
function k(t) {
    let { transitionState: n, onClose: e, analyticsLocation: i, platformType: s } = t,
        {
            slide: a,
            gotoNext: d,
            gotoError: p,
            handleWaitingForConnection: T,
            handleAuthToken: C,
            expectedCallbackState: h,
            callbackData: N,
            errorCode: u,
        } = (0, l.m)(i, s);
    return (0, o.jsx)(r.EO, {
        "data-migration-pending": !0,
        className: E.yl,
        transitionState: n,
        disableTrack: !0,
        parentComponent: "PlayStationLinkModal",
        children: (0, o.jsxs)(c.t, {
            activeSlide: a,
            width: 408,
            children: [
                (0, o.jsx)(c.q, {
                    id: _.N.LANDING,
                    children: (0, o.jsx)(m, { platformType: s, onContinue: d, onClose: e }),
                }),
                (0, o.jsx)(c.q, {
                    id: _.N.PRE_CONNECT,
                    children: (0, o.jsx)(S, {
                        platformType: s,
                        isWaitingForConnection: !1,
                        onWaitingForConnection: T,
                        onAuthToken: C,
                        onError: p,
                        onClose: e,
                    }),
                }),
                (0, o.jsx)(c.q, {
                    id: _.N.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(S, {
                        platformType: s,
                        isWaitingForConnection: !0,
                        expectedCallbackState: h,
                        onAuthToken: C,
                        onError: p,
                        onClose: e,
                    }),
                }),
                (0, o.jsx)(c.q, {
                    id: _.N.DISCORD_CONSENT,
                    children: (0, o.jsx)(g, { platformType: s, authToken: N, onContinue: d, onError: p, onClose: e }),
                }),
                (0, o.jsx)(c.q, {
                    id: _.N.ERROR,
                    children: (0, o.jsx)(A, { onContinue: d, onClose: e, errorCode: u }),
                }),
                (0, o.jsx)(c.q, { id: _.N.SUCCESS, children: (0, o.jsx)(P, { onClose: e }) }),
            ],
        }),
    });
}
