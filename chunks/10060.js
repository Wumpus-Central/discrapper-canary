n.d(t, { default: () => E });
var o,
    i = n(627968),
    r = n(64700),
    s = n(935462),
    a = n(430690),
    c = n(71448),
    l =
        (((o = {}).PLAYSTATION = "https://discord.com/connections/playstation/link"),
        (o.PLAYSTATION_STAGING = "https://discord.com/connections/playstation-stg/link"),
        o),
    d = n(333748),
    _ = n(693576),
    T = n(652215),
    p = n(544105);
function A(e) {
    let { platformType: t, authToken: n, onContinue: o, onError: r, onClose: s } = e,
        a = t === T.fg2.PLAYSTATION_STAGING ? d.i.PLAYSTATION_STAGING_APPLICATION_ID : d.i.PLAYSTATION_APPLICATION_ID,
        c = t === T.fg2.PLAYSTATION_STAGING ? l.PLAYSTATION_STAGING : l.PLAYSTATION;
    return (0, i.jsx)(_.W, {
        platformType: t,
        clientId: a,
        scopes: p.NL,
        authToken: n,
        onContinue: o,
        onError: r,
        onClose: s,
        redirectUri: c,
    });
}
var b = n(723054),
    C = n(985018);
function I(e) {
    let { onContinue: t, onClose: n, errorCode: o } = e,
        r = o === T.t02.UNDER_MINIMUM_AGE ? C.intl.string(C.t["3dIn2A"]) : C.intl.string(C.t.qE9nqE);
    return (0, i.jsx)(b.s, { title: C.intl.string(C.t.eY3qHd), body: r, onClose: n, onContinue: t });
}
var N = n(983851),
    h = n(687966),
    g = n(975571),
    u = n(944995);
function P(e) {
    let { platformType: t, onContinue: n, onClose: o } = e,
        s = r.useMemo(
            () => [
                { label: C.intl.string(C.t["+eJP7o"]), subLabel: C.intl.string(C.t["+0VIUh"]), icon: N.H },
                { label: C.intl.string(C.t.ZH4QFa), icon: h._ },
            ],
            [],
        ),
        a = g.A.getArticleURL(T.MVz.PS_CONNECTION),
        c = C.intl.format(C.t.kqZQNe, { helpdeskArticleUrl: a });
    return (0, i.jsx)(u.B, {
        platformType: t,
        headerConnect: C.intl.string(C.t.xAWHOy),
        headerReconnect: C.intl.string(C.t["ZJ/vBh"]),
        body: c,
        onClose: o,
        onContinue: n,
        img: (0, i.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/09152e47812b0b36abe406a49de1cc71ebae44cd025b7f7ce471ecf1bd152285.png",
            width: 230,
            height: 160,
            alt: "",
        }),
        valueProps: s,
    });
}
var f = n(226377);
function S(e) {
    let {
            platformType: t,
            isWaitingForConnection: n,
            onWaitingForConnection: o,
            expectedCallbackState: r,
            onAuthToken: s,
            onError: a,
            onClose: c,
        } = e,
        l = n
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
        d = n ? C.intl.string(C.t.TTIocg) : C.intl.string(C.t["6n+UPR"]),
        _ = n ? C.intl.string(C.t.MNmoKH) : C.intl.string(C.t.JaaqIf);
    return (0, i.jsx)(f.b, {
        platformType: t,
        isWaitingForConnection: n,
        onWaitingForConnection: o,
        expectedCallbackState: r,
        onAuthToken: s,
        onError: a,
        onClose: c,
        img: l,
        title: d,
        body: _,
    });
}
var m = n(61917),
    x = n(326513);
function O(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(m.b, {
        img: (0, i.jsx)("img", { src: x.A, width: "124 ", height: "160", alt: "" }),
        title: C.intl.string(C.t.e6SOl0),
        body: C.intl.string(C.t.QjAZAQ),
        onClose: t,
    });
}
var L = n(690095),
    j = n(974651);
function E(e) {
    let { transitionState: t, onClose: n, analyticsLocation: o, platformType: r } = e,
        {
            slide: l,
            gotoNext: d,
            gotoError: _,
            handleWaitingForConnection: T,
            handleAuthToken: p,
            expectedCallbackState: b,
            callbackData: C,
            errorCode: N,
        } = (0, c.m)(o, r);
    return (0, i.jsx)(s.EO, {
        "data-migration-pending": !0,
        className: j.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "PlayStationLinkModal",
        children: (0, i.jsxs)(a.t, {
            activeSlide: l,
            width: 408,
            children: [
                (0, i.jsx)(a.q, {
                    id: L.N.LANDING,
                    children: (0, i.jsx)(P, { platformType: r, onContinue: d, onClose: n }),
                }),
                (0, i.jsx)(a.q, {
                    id: L.N.PRE_CONNECT,
                    children: (0, i.jsx)(S, {
                        platformType: r,
                        isWaitingForConnection: !1,
                        onWaitingForConnection: T,
                        onAuthToken: p,
                        onError: _,
                        onClose: n,
                    }),
                }),
                (0, i.jsx)(a.q, {
                    id: L.N.PRE_CONNECT_WAITING,
                    children: (0, i.jsx)(S, {
                        platformType: r,
                        isWaitingForConnection: !0,
                        expectedCallbackState: b,
                        onAuthToken: p,
                        onError: _,
                        onClose: n,
                    }),
                }),
                (0, i.jsx)(a.q, {
                    id: L.N.DISCORD_CONSENT,
                    children: (0, i.jsx)(A, { platformType: r, authToken: C, onContinue: d, onError: _, onClose: n }),
                }),
                (0, i.jsx)(a.q, {
                    id: L.N.ERROR,
                    children: (0, i.jsx)(I, { onContinue: d, onClose: n, errorCode: N }),
                }),
                (0, i.jsx)(a.q, { id: L.N.SUCCESS, children: (0, i.jsx)(O, { onClose: n }) }),
            ],
        }),
    });
}
