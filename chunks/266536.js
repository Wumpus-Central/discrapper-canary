s.d(t, { default: () => t$ });
var i = s(627968),
    l = s(64700),
    r = s(503698),
    n = s.n(r),
    a = s(299855),
    c = s.n(a),
    o = s(562708),
    d = s(141931),
    u = s(17928),
    f = s(364522),
    h = s(93688),
    x = s(428689),
    p = s(31300),
    m = s(224640),
    j = s(629584),
    g = s(821609),
    v = s(157559),
    S = s(444927),
    A = s(77729),
    C = s(90804),
    y = s(793574),
    E = s(688810),
    _ = s(952818),
    w = s(885386),
    N = s(235058),
    I = s(763827),
    O = s(287809),
    R = s(157257),
    M = s(723702),
    T = s(428262),
    L = s(997630),
    U = s(725792),
    G = s(905552),
    b = s(560595);
s(321073), s(839272);
var D = s(342952),
    P = s(939249),
    F = s(834730),
    k = s(983851),
    Z = s(892547),
    H = s(475825),
    B = s(7689),
    V = s(661531),
    Q = s(115718),
    W = s(280157),
    z = s(174768),
    q = s(369174),
    X = s(95701),
    $ = s(260509),
    Y = s(734057),
    J = s(205761),
    K = s(808728),
    ee = s(71393),
    et = s(576705),
    es = s(967198),
    ei = s(607567),
    el = s(403362),
    er = s(279250),
    en = s(652215),
    ea = s(710787),
    ec = s(375708),
    eo = s(617335);
function ed(e) {
    let { result: t, onSelectChannel: s } = e,
        l = (0, u.bG)([ee.A], () => ee.A.getGuild(t.record.guild_id)),
        r = (0, u.yK)([ei.Ay, O.default], () =>
            ei.Ay.getVoiceStatesForChannel(t.record)
                .map((e) => O.default.getUser(e.user.id))
                .filter(el.Vq),
        );
    return (0, i.jsxs)(P.D, {
        className: eo.p8,
        onClick: () => s(t.record.id),
        children: [
            (0, i.jsxs)("div", {
                className: eo.nN,
                children: [
                    (0, i.jsx)("img", { alt: "", src: null != l ? (0, $.Iv)(l, 32) : void 0, className: eo.$f }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(F.E, {
                                className: eo.HA,
                                variant: "text-md/medium",
                                color: "interactive-text-default",
                                children: [(0, i.jsx)(k.H, { size: "xs", color: "currentColor" }), " ", t.record.name],
                            }),
                            (0, i.jsx)(F.E, { variant: "text-xs/medium", color: "text-muted", children: l?.name }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(D.A, { users: r, maxUsers: 3, hideOverflowCount: !0 }),
        ],
    });
}
function eu(e) {
    let { onSelectChannel: t, className: s } = e,
        { search: r, query: a, results: c } = (0, q.A)({ searchOptions: { frecencyBoosters: !0 } }),
        o = (0, u.yK)([es.A, K.Ay, Y.A, ee.A, et.A], () => {
            let e = [],
                t = es.A.getGuildId();
            if (null == t) return e;
            for (let s of K.Ay.getVocalChannelIds(t)) {
                let t = Y.A.getChannel(s);
                null != t && (0, er.vz)(t, ee.A, et.A) && e.push(t);
            }
            return e;
        }),
        d = (0, u.yK)([z.A, Y.A, J.A, ee.A, et.A], () => {
            let e = [],
                t = new Set();
            for (let s of z.A.getChannelHistory()) {
                let i = Y.A.getChannel(s);
                i?.type === en.rbe.GUILD_VOICE && (0, er.vz)(i, ee.A, et.A) && (t.add(i.id), e.push(i));
            }
            for (let s of J.A.getFrequentlyWithoutFetchingLatest())
                s instanceof X.YB &&
                    s.type === en.rbe.GUILD_VOICE &&
                    !t.has(s.id) &&
                    (0, er.vz)(s, ee.A, et.A) &&
                    (t.add(s.id), e.push(s));
            return e;
        }),
        f = l.useMemo(() => {
            let e = new Set(d.map((e) => e.id)),
                t = new Set(o.map((e) => e.id));
            return [
                ...o
                    .toSorted((t, s) => (e.has(t.id) && !e.has(s.id) ? -1 : e.has(s.id) && !e.has(t.id) ? 1 : 0))
                    .map((e) => (0, W.A)(e.id))
                    .filter(el.Vq),
                ...d
                    .filter((e) => !t.has(e.id))
                    .map((e) => (0, W.A)(e.id))
                    .filter(el.Vq),
            ];
        }, [d, o]),
        h = "" !== a ? c : f;
    return (0, i.jsxs)("div", {
        className: n()(eo.zr, s),
        children: [
            (0, i.jsx)("div", {
                className: eo.ON,
                children: (0, i.jsx)(Z.I, {
                    placeholder: ec.intl.string(ec.t["3jvv+6"]),
                    query: a,
                    onChange: (e) => r({ query: e, resultTypes: [Q.rD.VOICE_CHANNEL] }),
                    onClear: () => r({ query: "", resultTypes: [Q.rD.VOICE_CHANNEL] }),
                    autoFocus: !0,
                }),
            }),
            h.length > 0
                ? (0, i.jsx)(H.OZ, {
                      renderListHeader: function () {
                          return (0, i.jsx)(F.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: ec.intl.string(ea.default.FZ9Fl7),
                          });
                      },
                      sections: [h.length],
                      sectionHeight: 0,
                      rowHeight: 48,
                      renderRow: function (e) {
                          let { rowIndex: s } = e,
                              l = h[s];
                          return (0, i.jsx)(ed, { result: l, onSelectChannel: t }, l.record.id);
                      },
                  })
                : (0, i.jsx)(ef, {}),
        ],
    });
}
function ef() {
    return (0, i.jsxs)("div", {
        className: eo.p$,
        children: [
            (0, i.jsx)(B.$, { className: eo.Dw, size: "md", color: V.A.colors.ICON_MUTED }),
            (0, i.jsx)(F.E, {
                className: eo.jU,
                variant: "text-lg/medium",
                color: "text-strong",
                children: ec.intl.string(ea.default.sWGfr9),
            }),
            (0, i.jsx)(F.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: ec.intl.string(ea.default["nBRtt/"]),
            }),
        ],
    });
}
var eh = s(289873),
    ex = s(830012);
s(393431), s(532706), s(42231), s(232424), s(949626), s(767709), s(65162), s(508300);
var ep = s(344390),
    em = s(742459),
    ej = s(780907);
async function eg() {
    let e = _.Ay.getRunningGames();
    return (
        await Promise.all(
            e.map(async (e) => {
                let t;
                if (null == e.name) return null;
                try {
                    t = await ej.Ay.identifyGame(e.pid, e.name);
                } catch (e) {
                    return null;
                }
                let s = e.windowHandle,
                    i = e.name,
                    l = t.icon;
                return null != s && null != i && null != l
                    ? { id: `window:${s}`, name: i, url: `data:image/bmp;base64,${l}` }
                    : null;
            }),
        )
    ).filter(el.Vq);
}
let ev = [
    "GQgGHISKZ5aYqYeYhX9isDUHGw",
    "bAgKFITWhoVvmHVRuokCdjVQaA",
    "XAgGDIJ/ipadd3iCiYUcWpCZBA",
    "HRkGDIT5aXRneomGdlvUawB7qA",
    "I9gNDISmlqqPmHiKd3isTp/5lg",
    "XxgGBIIwT2ZGpneUeZev6fWLXQ",
    "KzsKNIZDeYmfd3ihe1bXfr8Jxg",
    "J9cRDIJ6iHd/d4h4eIUJf5LyRw",
    "DggKFIQwtndKe3hVfXnAWQmddQ",
    "WggKDILeh3ePZpd6l4jln1b5SQ",
    "4PgJJIJVl3eAaod2iJeHj7tE8Q",
];
async function eS(e) {
    var t;
    let s,
        { width: i, height: l, types: r = [d.fS.CAMERA, d.fS.SCREEN, d.fS.WINDOW] } = e,
        n = N.Ay.getVideoDevices(),
        a = (0, em.A)(N.Ay.getMediaEngine(), r, { width: i, height: l }),
        c = eg(),
        o = await c,
        u = await a,
        f = u
            .filter((e) => e.id.startsWith(d.fS.SCREEN))
            .map((e) => {
                let t = e.name;
                return (
                    "Entire screen" === t
                        ? (t = ec.intl.string(ec.t.R4wpLN))
                        : /^Screen \d+$/.test(t) &&
                          (t = ec.intl.formatToPlainString(ec.t["y/R7n4"], { index: parseInt(t.split(" ")[1]) })),
                    { ...e, name: t }
                );
            }),
        h = ((t = u.filter((e) => e.id.startsWith(d.fS.WINDOW))),
        (s = {}),
        o.forEach((e) => {
            s[e.id] = e;
        }),
        t.forEach((e) => {
            s[e.id] = e;
        }),
        Object.values(s)).map((e) => ({ ...e, icon: e.icon?.split(",")[1] ? e.icon : void 0 })),
        x = [];
    return (
        r.includes(d.fS.CAMERA) &&
            (x = Object.entries(n)
                .filter((e) => {
                    let [t, s] = e;
                    return !s.disabled;
                })
                .map((e, t) => {
                    let [s, i] = e,
                        l = ev[t % ev.length],
                        r = Uint8Array.from(atob(l), (e) => e.charCodeAt(0)),
                        n = (0, ep.V1)(r);
                    return { id: "camera:" + i.id, name: i.name, url: n };
                })),
        { windowSources: h, screenSources: f, cameraSources: x }
    );
}
var eA = s(735438),
    eC = s.n(eA),
    ey = s(72978),
    eE = s(91777),
    e_ = s(929921),
    ew = s(258585),
    eN = s(327649),
    eI = s(753070),
    eO = s(765682);
let eR = {
        screenSources: [],
        windowSources: [],
        deviceSources: [],
        hasPermission: void 0,
        muteStreamAudio: !1,
        notifyFriends: !1,
        hidePreview: !1,
        preset: eI.jQ.PRESET_CUSTOM,
        resolution: eI.on.RESOLUTION_720,
        fps: eI.kn.FPS_30,
        sourceType: d.fS.WINDOW,
        fetchingSources: !0,
        selectedSource: void 0,
        audioSourceId: void 0,
        selectedChannel: void 0,
        nativeSourceType: "",
        discordSourceId: "",
    },
    eM = l.createContext(eR),
    eT = l.createContext(() => {
        throw Error("Using uninitialized GoLiveModalContextDispatch");
    });
function eL(e, t) {
    switch (t.type) {
        case "set_mute_audio":
            return { ...e, muteStreamAudio: t.value };
        case "set_notify_friends":
            return { ...e, notifyFriends: t.value };
        case "set_has_permission":
            return { ...e, hasPermission: t.value };
        case "set_source_candidates":
            return {
                ...e,
                screenSources: t.screenSources,
                windowSources: t.windowSources,
                deviceSources: t.deviceSources,
                fetchingSources: !1,
            };
        case "set_preset":
            return { ...e, preset: t.preset };
        case "set_source_type":
            let s = { sourceType: t.sourceType, selectedSource: void 0 };
            return (
                t.sourceType === d.fS.CAMERA
                    ? ((e.preset === eI.jQ.PRESET_DOCUMENTS || e.preset === eI.jQ.PRESET_AUTO) &&
                          (s.preset = eI.jQ.PRESET_VIDEO),
                      e.resolution === eI.on.RESOLUTION_SOURCE && (s.resolution = eI.on.RESOLUTION_720))
                    : (s.selectedSource = null),
                { ...e, ...s }
            );
        case "set_native_source_type":
            return { ...e, nativeSourceType: t.sourceType };
        case "set_resolution":
            return { ...e, resolution: t.resolution };
        case "set_fps":
            return { ...e, fps: t.fps };
        case "set_hide_preview":
            return { ...e, hidePreview: t.hidePreview };
        case "set_selected_source": {
            let s = t.source,
                i = { ...e, selectedSource: s },
                l = s?.name;
            if (null != s && s.id?.startsWith(d.fS.CAMERA) && null != l) {
                let e = eC().maxBy(Object.values(N.Ay.getInputDevices()), (e) => (0, ey.default)(l, e.name));
                i.audioSourceId = e?.id ?? N.Ay.getInputDeviceId();
            }
            return i;
        }
        case "set_audio_source":
            return { ...e, audioSourceId: t.audioSourceId ?? N.Ay.getInputDeviceId() };
        case "set_selected_channel":
            return { ...e, selectedChannel: t.channelId };
        case "set_discord_source_id":
            return { ...e, discordSourceId: t.sourceId };
        default:
            return e;
    }
}
function eU(e) {
    let { dispatch: t, state: s, children: l } = e;
    return (0, i.jsx)(eT.Provider, { value: t, children: (0, i.jsx)(eM.Provider, { value: s, children: l }) });
}
function eG() {
    return [l.useContext(eM), l.useContext(eT)];
}
var eb = s(67788);
function eD() {
    let [{ selectedSource: e }] = eG(),
        [t, s] = l.useState(null),
        [r, n] = l.useState(!0);
    return (
        l.useEffect(() => {
            !(async function () {
                if (null == e) return;
                if ((n(!0), e.id?.startsWith(d.fS.CAMERA))) {
                    "url" in e && (s(e.url), n(!1));
                    return;
                }
                if ("url" in e && "" !== e.url) {
                    s(e.url), n(!1);
                    return;
                }
                let t = "windowHandle" in e ? e.windowHandle : void 0;
                if (null != t) {
                    try {
                        let e = N.Ay.getMediaEngine(),
                            i = await e.getSingleWindowPreview(t, 960, 540);
                        if (null != i) {
                            s(i.url), n(!1);
                            return;
                        }
                    } catch {}
                    let { windowSources: e } = await eS({ width: 960, height: 540, types: [d.fS.WINDOW] }),
                        i = e.find((e) => (0, ex.A)(e.id, t));
                    null != i && (s(i.url), n(!1));
                    return;
                }
                let { screenSources: i, windowSources: l } = await eS({
                        width: 960,
                        height: 540,
                        types: [d.fS.SCREEN, d.fS.WINDOW],
                    }),
                    r =
                        l.find((t) => ("windowHandle" in e ? (0, ex.A)(t.id, e.windowHandle) : t.id === e.id)) ??
                        i.find((t) => e.id === t.id);
                null != r && (s(r.url), n(!1));
            })();
        }, [e]),
        (0, i.jsx)("div", {
            className: eb.z,
            children: r
                ? (0, i.jsx)(eh.y, {})
                : null != t
                  ? (0, i.jsx)("img", { src: t, alt: "", className: eb.Q })
                  : null,
        })
    );
}
var eP = s(534514),
    eF = s(66455),
    ek = s(775602),
    eZ = s(120559);
let eH = l.memo(function (e) {
    let { className: t, animated: s = !1 } = e,
        r = l.useId();
    function a(e) {
        return `${r}-${e}`;
    }
    function c(e) {
        return `url(#${a(e)})`;
    }
    let o = (0, u.bG)([ek.A], () => ek.A.useReducedMotion);
    return (0, i.jsx)("svg", {
        className: n()(eZ.gx, t),
        width: "392",
        height: "254",
        viewBox: "0 0 392 254",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children:
            !0 !== s || o
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("g", {
                              clipPath: c("clip0"),
                              children: [
                                  (0, i.jsx)("rect", {
                                      width: "392",
                                      height: "254",
                                      rx: "8",
                                      fill: "#1A1C37",
                                      fillOpacity: "0.8",
                                  }),
                                  (0, i.jsx)("g", {
                                      filter: c("filter0"),
                                      children: (0, i.jsx)("rect", {
                                          x: "21",
                                          y: "-0.21051",
                                          width: "241.861",
                                          height: "148.887",
                                          rx: "8",
                                          fill: "#F47FFF",
                                      }),
                                  }),
                                  (0, i.jsx)("g", {
                                      filter: c("filter1"),
                                      children: (0, i.jsx)("rect", {
                                          x: "57.8317",
                                          y: "47.8552",
                                          width: "335.168",
                                          height: "206.331",
                                          rx: "8",
                                          fill: "#5865F2",
                                      }),
                                  }),
                                  (0, i.jsx)("g", {
                                      filter: c("filter2"),
                                      children: (0, i.jsx)("rect", {
                                          x: "223.574",
                                          y: "11.5128",
                                          width: "154.693",
                                          height: "101.993",
                                          rx: "8",
                                          fill: "#FFD836",
                                      }),
                                  }),
                                  (0, i.jsx)("g", {
                                      filter: c("filter3"),
                                      children: (0, i.jsx)("rect", {
                                          x: "142.545",
                                          y: "67.785",
                                          width: "232.04",
                                          height: "143.025",
                                          rx: "8",
                                          fill: "#AEC7FF",
                                      }),
                                  }),
                                  (0, i.jsx)("g", {
                                      filter: c("filter4"),
                                      children: (0, i.jsx)("rect", {
                                          x: "152.558",
                                          y: "84",
                                          width: "86",
                                          height: "86",
                                          rx: "24",
                                          fill: c("paint0"),
                                      }),
                                  }),
                                  (0, i.jsx)("path", {
                                      fillRule: "evenodd",
                                      clipRule: "evenodd",
                                      d: "M171.907 114.1C171.907 110.538 174.795 107.65 178.357 107.65H212.757C216.319 107.65 219.207 110.538 219.207 114.1V118.4C219.207 119.587 218.244 120.55 217.057 120.55H174.057C172.869 120.55 171.907 119.587 171.907 118.4V114.1ZM178.357 116.25C179.544 116.25 180.507 115.287 180.507 114.1C180.507 112.913 179.544 111.95 178.357 111.95C177.169 111.95 176.207 112.913 176.207 114.1C176.207 115.287 177.169 116.25 178.357 116.25ZM186.957 114.1C186.957 115.287 185.994 116.25 184.807 116.25C183.619 116.25 182.657 115.287 182.657 114.1C182.657 112.913 183.619 111.95 184.807 111.95C185.994 111.95 186.957 112.913 186.957 114.1ZM191.257 116.25C192.444 116.25 193.407 115.287 193.407 114.1C193.407 112.913 192.444 111.95 191.257 111.95C190.069 111.95 189.107 112.913 189.107 114.1C189.107 115.287 190.069 116.25 191.257 116.25Z",
                                      fill: "white",
                                  }),
                                  (0, i.jsx)("path", {
                                      d: "M171.907 127C171.907 125.813 172.869 124.85 174.057 124.85H217.057C218.244 124.85 219.207 125.813 219.207 127V139.9C219.207 143.462 216.319 146.35 212.757 146.35H178.357C174.795 146.35 171.907 143.462 171.907 139.9V127Z",
                                      fill: "white",
                                  }),
                                  (0, i.jsx)("rect", {
                                      x: "44",
                                      y: "84",
                                      width: "86",
                                      height: "86",
                                      rx: "24",
                                      fill: "white",
                                      fillOpacity: "0.2",
                                  }),
                                  (0, i.jsx)("path", {
                                      d: "M71.9512 105.5C68.389 105.5 65.5012 108.388 65.5012 111.95V129.15C65.5012 132.712 68.389 135.6 71.9512 135.6H102.051C105.613 135.6 108.501 132.712 108.501 129.15V111.95C108.501 108.388 105.613 105.5 102.051 105.5H71.9512Z",
                                      fill: "white",
                                  }),
                                  (0, i.jsx)("path", {
                                      d: "M90.2262 144.2C89.6325 144.2 89.1512 143.719 89.1512 143.125V138.825C89.1512 138.231 88.6699 137.75 88.0762 137.75H85.9262C85.3325 137.75 84.8512 138.231 84.8512 138.825V143.125C84.8512 143.719 84.3699 144.2 83.7762 144.2H80.5512C79.3638 144.2 78.4012 145.163 78.4012 146.35C78.4012 147.537 79.3638 148.5 80.5512 148.5H93.4512C94.6386 148.5 95.6012 147.537 95.6012 146.35C95.6012 145.163 94.6386 144.2 93.4512 144.2H90.2262Z",
                                      fill: "white",
                                  }),
                                  (0, i.jsx)("rect", {
                                      x: "261",
                                      y: "84",
                                      width: "86",
                                      height: "86",
                                      rx: "24",
                                      fill: "white",
                                      fillOpacity: "0.2",
                                  }),
                                  (0, i.jsx)("path", {
                                      d: "M320.425 111.461C317.273 109.993 313.95 108.959 310.542 108.371C310.077 109.222 309.651 110.094 309.275 110.985C305.648 110.438 301.952 110.438 298.324 110.985C297.938 110.094 297.514 109.222 297.049 108.381C293.629 108.969 290.307 110.003 287.154 111.472C280.888 120.863 279.197 130.032 280.048 139.059C283.715 141.804 287.815 143.891 292.175 145.229C293.155 143.891 294.024 142.463 294.767 140.973C293.351 140.437 291.979 139.778 290.673 138.988C291.02 138.735 291.356 138.481 291.681 138.198C299.361 141.865 308.238 141.865 315.919 138.198C316.245 138.471 316.58 138.735 316.916 138.988C315.613 139.768 314.238 140.437 312.825 140.973C313.577 142.463 314.437 143.881 315.414 145.218C319.773 143.881 323.874 141.794 327.541 139.049H327.553C328.55 128.593 325.853 119.516 320.425 111.461ZM295.84 133.505C293.476 133.505 291.528 131.306 291.528 128.632C291.528 125.957 293.428 123.759 295.84 123.759C298.252 123.759 300.187 125.957 300.149 128.632C300.149 131.306 298.24 133.505 295.84 133.505ZM311.754 133.505C309.39 133.505 307.442 131.306 307.442 128.632C307.442 125.957 309.351 123.759 311.754 123.759C314.154 123.759 316.101 125.957 316.063 128.632C316.063 131.306 314.154 133.505 311.754 133.505Z",
                                      fill: "white",
                                  }),
                                  (0, i.jsx)("path", {
                                      fillRule: "evenodd",
                                      clipRule: "evenodd",
                                      d: "M194 187.542V153L219 178.06H204.374L203.488 178.328L194 187.542Z",
                                      fill: "white",
                                  }),
                                  (0, i.jsx)("path", {
                                      fillRule: "evenodd",
                                      clipRule: "evenodd",
                                      d: "M213.594 188.996L205.818 192.307L195.72 168.39L203.67 165.04L213.594 188.996Z",
                                      fill: "white",
                                  }),
                                  (0, i.jsx)("path", {
                                      fillRule: "evenodd",
                                      clipRule: "evenodd",
                                      d: "M210.718 187.528L206.741 189.197L200.054 173.293L204.025 171.621L210.718 187.528Z",
                                      fill: "black",
                                  }),
                                  (0, i.jsx)("path", {
                                      fillRule: "evenodd",
                                      clipRule: "evenodd",
                                      d: "M196.157 158.192V182.323L202.561 176.141L203.484 175.841H213.768L196.157 158.192Z",
                                      fill: "black",
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("defs", {
                              children: [
                                  (0, i.jsxs)("filter", {
                                      id: a("filter0"),
                                      x: "-99",
                                      y: "-120.211",
                                      width: "481.861",
                                      height: "388.887",
                                      filterUnits: "userSpaceOnUse",
                                      colorInterpolationFilters: "sRGB",
                                      children: [
                                          (0, i.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                          (0, i.jsx)("feBlend", {
                                              mode: "normal",
                                              in: "SourceGraphic",
                                              in2: "BackgroundImageFix",
                                              result: "shape",
                                          }),
                                          (0, i.jsx)("feGaussianBlur", {
                                              stdDeviation: "60",
                                              result: "effect1_foregroundBlur_7254_10733",
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("filter", {
                                      id: a("filter1"),
                                      x: "-62.1683",
                                      y: "-72.1448",
                                      width: "575.168",
                                      height: "446.331",
                                      filterUnits: "userSpaceOnUse",
                                      colorInterpolationFilters: "sRGB",
                                      children: [
                                          (0, i.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                          (0, i.jsx)("feBlend", {
                                              mode: "normal",
                                              in: "SourceGraphic",
                                              in2: "BackgroundImageFix",
                                              result: "shape",
                                          }),
                                          (0, i.jsx)("feGaussianBlur", {
                                              stdDeviation: "60",
                                              result: "effect1_foregroundBlur_7254_10733",
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("filter", {
                                      id: a("filter2"),
                                      x: "103.574",
                                      y: "-108.487",
                                      width: "394.693",
                                      height: "341.993",
                                      filterUnits: "userSpaceOnUse",
                                      colorInterpolationFilters: "sRGB",
                                      children: [
                                          (0, i.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                          (0, i.jsx)("feBlend", {
                                              mode: "normal",
                                              in: "SourceGraphic",
                                              in2: "BackgroundImageFix",
                                              result: "shape",
                                          }),
                                          (0, i.jsx)("feGaussianBlur", {
                                              stdDeviation: "60",
                                              result: "effect1_foregroundBlur_7254_10733",
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("filter", {
                                      id: a("filter3"),
                                      x: "22.5446",
                                      y: "-52.215",
                                      width: "472.04",
                                      height: "383.025",
                                      filterUnits: "userSpaceOnUse",
                                      colorInterpolationFilters: "sRGB",
                                      children: [
                                          (0, i.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                          (0, i.jsx)("feBlend", {
                                              mode: "normal",
                                              in: "SourceGraphic",
                                              in2: "BackgroundImageFix",
                                              result: "shape",
                                          }),
                                          (0, i.jsx)("feGaussianBlur", {
                                              stdDeviation: "60",
                                              result: "effect1_foregroundBlur_7254_10733",
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("filter", {
                                      id: a("filter4"),
                                      x: "132.558",
                                      y: "72.6",
                                      width: "126",
                                      height: "126",
                                      filterUnits: "userSpaceOnUse",
                                      colorInterpolationFilters: "sRGB",
                                      children: [
                                          (0, i.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                          (0, i.jsx)("feColorMatrix", {
                                              in: "SourceAlpha",
                                              type: "matrix",
                                              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                              result: "hardAlpha",
                                          }),
                                          (0, i.jsx)("feOffset", { dy: "8.6" }),
                                          (0, i.jsx)("feGaussianBlur", { stdDeviation: "10" }),
                                          (0, i.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                          (0, i.jsx)("feColorMatrix", {
                                              type: "matrix",
                                              values: "0 0 0 0 0.0870551 0 0 0 0 0.112803 0 0 0 0 0.392074 0 0 0 0.2 0",
                                          }),
                                          (0, i.jsx)("feBlend", {
                                              mode: "normal",
                                              in2: "BackgroundImageFix",
                                              result: "effect1_dropShadow_7254_10733",
                                          }),
                                          (0, i.jsx)("feBlend", {
                                              mode: "normal",
                                              in: "SourceGraphic",
                                              in2: "effect1_dropShadow_7254_10733",
                                              result: "shape",
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("linearGradient", {
                                      id: a("paint0"),
                                      x1: "238.558",
                                      y1: "170",
                                      x2: "152.558",
                                      y2: "84",
                                      gradientUnits: "userSpaceOnUse",
                                      children: [
                                          (0, i.jsx)("stop", { stopColor: "#4752C4" }),
                                          (0, i.jsx)("stop", { offset: "1", stopColor: "#6571F3" }),
                                      ],
                                  }),
                                  (0, i.jsx)("clipPath", {
                                      id: a("clip0"),
                                      children: (0, i.jsx)("rect", {
                                          width: "392",
                                          height: "254",
                                          rx: "8",
                                          fill: "white",
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("defs", {
                              children: [
                                  (0, i.jsx)("filter", {
                                      id: a("filter0"),
                                      x: "-150%",
                                      width: "400%",
                                      y: "-150%",
                                      height: "400%",
                                      children: (0, i.jsx)("feGaussianBlur", {
                                          stdDeviation: "60,60",
                                          result: "result",
                                      }),
                                  }),
                                  (0, i.jsx)("filter", {
                                      id: a("filter1"),
                                      x: "-150%",
                                      width: "400%",
                                      y: "-150%",
                                      height: "400%",
                                      children: (0, i.jsx)("feGaussianBlur", {
                                          stdDeviation: "60,60",
                                          result: "result",
                                      }),
                                  }),
                                  (0, i.jsx)("filter", {
                                      id: a("filter2"),
                                      x: "-150%",
                                      width: "400%",
                                      y: "-150%",
                                      height: "400%",
                                      children: (0, i.jsx)("feGaussianBlur", {
                                          stdDeviation: "60,60",
                                          result: "result",
                                      }),
                                  }),
                                  (0, i.jsx)("filter", {
                                      id: a("filter3"),
                                      x: "-150%",
                                      width: "400%",
                                      y: "-150%",
                                      height: "400%",
                                      children: (0, i.jsx)("feGaussianBlur", {
                                          stdDeviation: "60,60",
                                          result: "result",
                                      }),
                                  }),
                                  (0, i.jsxs)("filter", {
                                      id: a("filter4"),
                                      x: "-150%",
                                      width: "400%",
                                      y: "-150%",
                                      height: "400%",
                                      children: [
                                          (0, i.jsx)("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "10,10" }),
                                          (0, i.jsx)("feOffset", { dx: "0", dy: "8.6", result: "tmp" }),
                                          (0, i.jsx)("feFlood", { floodColor: "rgba(22,29,100,0.2)" }),
                                          (0, i.jsx)("feComposite", { operator: "in", in2: "tmp" }),
                                          (0, i.jsxs)("feMerge", {
                                              result: "result",
                                              children: [
                                                  (0, i.jsx)("feMergeNode", {}),
                                                  (0, i.jsx)("feMergeNode", { in: "SourceGraphic" }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("linearGradient", {
                                      id: a("screenIconHighlight-fill"),
                                      x1: "0.059738",
                                      y1: "0.059805",
                                      x2: "0.900088",
                                      y2: "0.912265",
                                      spreadMethod: "pad",
                                      gradientUnits: "objectBoundingBox",
                                      gradientTransform: "translate(0 0)",
                                      children: [
                                          (0, i.jsx)("stop", { className: eZ.Ym, offset: "0%", stopColor: "#5f6be9" }),
                                          (0, i.jsx)("stop", {
                                              className: eZ.rl,
                                              offset: "100%",
                                              stopColor: "#4d58ce",
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("filter", {
                                      id: a("filter5"),
                                      x: "-150%",
                                      width: "400%",
                                      y: "-150%",
                                      height: "400%",
                                      children: [
                                          (0, i.jsx)("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "8,8" }),
                                          (0, i.jsx)("feOffset", { dx: "0", dy: "16", result: "tmp" }),
                                          (0, i.jsx)("feFlood", { floodColor: "rgba(19,25,93,0.23)" }),
                                          (0, i.jsx)("feComposite", { operator: "in", in2: "tmp" }),
                                          (0, i.jsxs)("feMerge", {
                                              result: "result",
                                              children: [
                                                  (0, i.jsx)("feMergeNode", {}),
                                                  (0, i.jsx)("feMergeNode", { in: "SourceGraphic" }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("linearGradient", {
                                      id: a("fill0"),
                                      x1: "86.2913",
                                      y1: "141.923",
                                      x2: "173.989",
                                      y2: "89.1545",
                                      spreadMethod: "pad",
                                      gradientUnits: "userSpaceOnUse",
                                      gradientTransform: "translate(0 0)",
                                      children: [
                                          (0, i.jsx)("stop", { offset: "0%", stopColor: "#3e70dd" }),
                                          (0, i.jsx)("stop", { offset: "60%", stopColor: "#6089f4" }),
                                          (0, i.jsx)("stop", { offset: "100%", stopColor: "#7196ff" }),
                                      ],
                                  }),
                                  (0, i.jsxs)("linearGradient", {
                                      id: a("fill1"),
                                      x1: "1900.86",
                                      y1: "1361.52",
                                      x2: "1343.93",
                                      y2: "1903.75",
                                      spreadMethod: "pad",
                                      gradientUnits: "userSpaceOnUse",
                                      gradientTransform: "translate(0 0)",
                                      children: [
                                          (0, i.jsx)("stop", { offset: "0%", stopColor: "#3e70dd" }),
                                          (0, i.jsx)("stop", { offset: "60%", stopColor: "#6089f4" }),
                                          (0, i.jsx)("stop", { offset: "100%", stopColor: "#7196ff" }),
                                      ],
                                  }),
                                  (0, i.jsxs)("linearGradient", {
                                      id: a("fill2"),
                                      x1: "6091.83",
                                      y1: "1378.91",
                                      x2: "6962.32",
                                      y2: "-423.639",
                                      spreadMethod: "pad",
                                      gradientUnits: "userSpaceOnUse",
                                      gradientTransform: "translate(0 0)",
                                      children: [
                                          (0, i.jsx)("stop", { offset: "0%", stopColor: "#3e70dd" }),
                                          (0, i.jsx)("stop", { offset: "60%", stopColor: "#6089f4" }),
                                          (0, i.jsx)("stop", { offset: "100%", stopColor: "#7196ff" }),
                                      ],
                                  }),
                                  (0, i.jsxs)("filter", {
                                      id: a("filter6"),
                                      x: "-150%",
                                      width: "400%",
                                      y: "-150%",
                                      height: "400%",
                                      children: [
                                          (0, i.jsx)("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "8,8" }),
                                          (0, i.jsx)("feOffset", { dx: "0", dy: "16", result: "tmp" }),
                                          (0, i.jsx)("feFlood", { floodColor: "rgba(19,25,93,0.23)" }),
                                          (0, i.jsx)("feComposite", { operator: "in", in2: "tmp" }),
                                          (0, i.jsxs)("feMerge", {
                                              result: "result",
                                              children: [
                                                  (0, i.jsx)("feMergeNode", {}),
                                                  (0, i.jsx)("feMergeNode", { in: "SourceGraphic" }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("linearGradient", {
                                      id: a("buttonOverWindowHighlight-fill"),
                                      x1: "0.109232",
                                      y1: "0.072144",
                                      x2: "0.888615",
                                      y2: "0.947629",
                                      spreadMethod: "pad",
                                      gradientUnits: "objectBoundingBox",
                                      gradientTransform: "translate(0 0)",
                                      children: [
                                          (0, i.jsx)("stop", { className: eZ.Pq, offset: "0%", stopColor: "#606ceb" }),
                                          (0, i.jsx)("stop", {
                                              className: eZ.I9,
                                              offset: "100%",
                                              stopColor: "#4b56cb",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("g", {
                              children: [
                                  (0, i.jsx)("rect", {
                                      width: "392",
                                      height: "254",
                                      rx: "0",
                                      ry: "0",
                                      fill: "#1a1c37",
                                  }),
                                  (0, i.jsxs)("g", {
                                      opacity: "0.7",
                                      children: [
                                          (0, i.jsx)("g", {
                                              filter: c("filter0"),
                                              children: (0, i.jsx)("rect", {
                                                  width: "241.861",
                                                  height: "148.887",
                                                  rx: "8",
                                                  ry: "8",
                                                  transform: "translate(21-.21051)",
                                                  fill: "#f47fff",
                                              }),
                                          }),
                                          (0, i.jsx)("g", {
                                              filter: c("filter1"),
                                              children: (0, i.jsx)("rect", {
                                                  width: "335.168",
                                                  height: "206.331",
                                                  rx: "8",
                                                  ry: "8",
                                                  transform: "translate(57.8317 47.8552)",
                                                  fill: "#5865f2",
                                              }),
                                          }),
                                          (0, i.jsx)("g", {
                                              filter: c("filter2"),
                                              children: (0, i.jsx)("rect", {
                                                  width: "154.693",
                                                  height: "101.993",
                                                  rx: "8",
                                                  ry: "8",
                                                  transform: "translate(223.574 11.5128)",
                                                  fill: "#ffd836",
                                              }),
                                          }),
                                          (0, i.jsx)("g", {
                                              filter: c("filter3"),
                                              children: (0, i.jsx)("rect", {
                                                  width: "232.04",
                                                  height: "143.025",
                                                  rx: "8",
                                                  ry: "8",
                                                  transform: "translate(142.545 67.785)",
                                                  fill: "#aec7ff",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("g", {
                                      className: eZ.Yp,
                                      transform: "translate(195.557999,127)",
                                      children: (0, i.jsx)("g", {
                                          className: eZ.Yv,
                                          transform: "scale(1,1)",
                                          children: (0, i.jsxs)("g", {
                                              className: eZ.AT,
                                              transform: "translate(-195.557999,-127)",
                                              filter: c("filter4"),
                                              children: [
                                                  (0, i.jsx)("rect", {
                                                      width: "86",
                                                      height: "86",
                                                      rx: "24",
                                                      ry: "24",
                                                      transform: "translate(152.558 84)",
                                                      fill: "rgba(255,255,255,0.2)",
                                                      fillOpacity: "0.967277",
                                                  }),
                                                  (0, i.jsx)("path", {
                                                      d: "M171.907,127c0-1.187.962-2.15,2.15-2.15h43c1.187,0,2.15.963,2.15,2.15v12.9c0,3.562-2.888,6.45-6.45,6.45h-34.4c-3.562,0-6.45-2.888-6.45-6.45v-12.9Z",
                                                      fill: "#fff",
                                                  }),
                                                  (0, i.jsx)("path", {
                                                      d: "M171.907,114.1c0-3.562,2.888-6.45,6.45-6.45h34.4c3.562,0,6.45,2.888,6.45,6.45v4.3c0,1.187-.963,2.15-2.15,2.15h-43c-1.188,0-2.15-.963-2.15-2.15v-4.3Zm6.45,2.15c1.187,0,2.15-.963,2.15-2.15s-.963-2.15-2.15-2.15c-1.188,0-2.15.963-2.15,2.15s.962,2.15,2.15,2.15Zm8.6-2.15c0,1.187-.963,2.15-2.15,2.15-1.188,0-2.15-.963-2.15-2.15s.962-2.15,2.15-2.15c1.187,0,2.15.963,2.15,2.15Zm4.3,2.15c1.187,0,2.15-.963,2.15-2.15s-.963-2.15-2.15-2.15c-1.188,0-2.15.963-2.15,2.15s.962,2.15,2.15,2.15Z",
                                                      clipRule: "evenodd",
                                                      fill: "#fff",
                                                      fillRule: "evenodd",
                                                  }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)("g", {
                                      className: eZ.xi,
                                      transform: "translate(87,127)",
                                      children: (0, i.jsx)("g", {
                                          className: eZ.x_,
                                          transform: "scale(1,1)",
                                          children: (0, i.jsxs)("g", {
                                              className: eZ.$2,
                                              transform: "translate(-87,-127)",
                                              children: [
                                                  (0, i.jsx)("rect", {
                                                      width: "86",
                                                      height: "86",
                                                      rx: "24",
                                                      ry: "24",
                                                      transform: "translate(44 84)",
                                                      fill: "#fff",
                                                      fillOpacity: "0.2",
                                                  }),
                                                  (0, i.jsx)("path", {
                                                      d: "M320.425,111.461c-3.152-1.468-6.475-2.502-9.883-3.09-.465.851-.891,1.723-1.267,2.614-3.627-.547-7.323-.547-10.951,0-.386-.891-.81-1.763-1.275-2.604-3.42.588-6.742,1.622-9.895,3.091-6.266,9.391-7.957,18.56-7.106,27.587c3.667,2.745,7.767,4.832,12.127,6.17.98-1.338,1.849-2.766,2.592-4.256-1.416-.536-2.788-1.195-4.094-1.985.347-.253.683-.507,1.008-.79c7.68,3.667,16.557,3.667,24.238,0c.326.273.661.537.997.79-1.303.78-2.678,1.449-4.091,1.985.752,1.49,1.612,2.908,2.589,4.245c4.359-1.337,8.46-3.424,12.127-6.169h.012c.997-10.456-1.7-19.533-7.128-27.588ZM295.84,133.505c-2.364,0-4.312-2.199-4.312-4.873c0-2.675,1.9-4.873,4.312-4.873s4.347,2.198,4.309,4.873c0,2.674-1.909,4.873-4.309,4.873Zm15.914,0c-2.364,0-4.312-2.199-4.312-4.873c0-2.675,1.909-4.873,4.312-4.873c2.4,0,4.347,2.198,4.309,4.873c0,2.674-1.909,4.873-4.309,4.873Z",
                                                      transform: "translate(-216.043403 0)",
                                                      fill: "#fff",
                                                  }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)("g", {
                                      className: eZ.m6,
                                      transform: "translate(304,127)",
                                      children: (0, i.jsx)("g", {
                                          className: eZ.mm,
                                          transform: "scale(1,1)",
                                          children: (0, i.jsxs)("g", {
                                              className: eZ.KG,
                                              transform: "translate(-304,-127)",
                                              children: [
                                                  (0, i.jsx)("rect", {
                                                      className: eZ.Cq,
                                                      width: "86",
                                                      height: "86",
                                                      rx: "24",
                                                      ry: "24",
                                                      transform: "translate(261 84)",
                                                      fill: c("screenIconHighlight-fill"),
                                                      fillOpacity: "0.2",
                                                  }),
                                                  (0, i.jsxs)("g", {
                                                      transform: "translate(217.000001 0)",
                                                      children: [
                                                          (0, i.jsx)("path", {
                                                              d: "M71.9512,105.5c-3.5622,0-6.45,2.888-6.45,6.45v17.2c0,3.562,2.8878,6.45,6.45,6.45h30.0998c3.562,0,6.45-2.888,6.45-6.45v-17.2c0-3.562-2.888-6.45-6.45-6.45h-30.0998Z",
                                                              fill: "#fff",
                                                          }),
                                                          (0, i.jsx)("path", {
                                                              d: "M90.2262,144.2c-.5937,0-1.075-.481-1.075-1.075v-4.3c0-.594-.4813-1.075-1.075-1.075h-2.15c-.5937,0-1.075.481-1.075,1.075v4.3c0,.594-.4813,1.075-1.075,1.075h-3.225c-1.1874,0-2.15.963-2.15,2.15s.9626,2.15,2.15,2.15h12.9c1.1874,0,2.15-.963,2.15-2.15s-.9626-2.15-2.15-2.15h-3.225Z",
                                                              fill: "#fff",
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)("g", {
                                      className: eZ.Fq,
                                      transform: "translate(194.2121,124.850005) scale(0.5,0.5)",
                                      children: (0, i.jsxs)("g", {
                                          className: eZ.Dm,
                                          transform: "translate(-109,-73.046998)",
                                          opacity: "0",
                                          children: [
                                              (0, i.jsxs)("g", {
                                                  clipPath: c("windowCard-clip"),
                                                  children: [
                                                      (0, i.jsxs)("g", {
                                                          children: [
                                                              (0, i.jsx)("g", {
                                                                  filter: c("filter5"),
                                                                  children: (0, i.jsx)("rect", {
                                                                      width: "218",
                                                                      height: "150",
                                                                      rx: "16",
                                                                      ry: "16",
                                                                      fill: "#fff",
                                                                  }),
                                                              }),
                                                              (0, i.jsxs)("g", {
                                                                  opacity: "0.4",
                                                                  children: [
                                                                      (0, i.jsx)("path", {
                                                                          d: "M173.774,75.7111l1.235-7.2965c-2.097.1074-4.142.6951-5.974,1.7174-1.832,1.0222-3.404,2.4515-4.592,4.177-7.414,11.7126-17.41,21.5865-29.228,28.871-2.955,3.383-6.746,5.937-10.996,7.411l1.722,7.068l4.537,18.57.459-.143c28.711-12.647,43.239-27.755,56.044-46.5831.173-.2289.316-.4864.46-.7153.871-1.4703,1.456-3.0916,1.722-4.7785l-10.824-1.8313c-1.449-.2855-2.733-1.1169-3.583-2.3213s-1.202-2.6892-.982-4.1454Z",
                                                                          fill: c("fill0"),
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M21.319,122.295c-1.1695-.128-2.3297-.329-3.4741-.601-.4737.269-.9249.575-1.3494.915-9.85782,7.969-18.49529,17.329-25.63905,27.785h26.44295l2.3543-16.31l1.6653-11.789Z",
                                                                          fill: c("fill1"),
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M19.6537,134.083l-2.3256,16.31h116.5959l-3.445-14.049-4.537-18.571-106.2883,16.31Z",
                                                                          fill: "#6a94ff",
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M26.8024,122.266c-1.8232.186-3.6606.186-5.4838,0l-1.6653,11.789l106.2307-16.31-1.722-7.068c-1.854.673-3.782,1.124-5.742,1.345L26.8024,122.266Z",
                                                                          fill: c("fill2"),
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M117.041,19.7425l-2.325.2576c3.708.5198,7.261,1.8289,10.416,3.8384c3.156,2.0094,5.841,4.6722,7.873,7.8074c5.35.4964,10.453,2.4792,14.729,5.7228-1.981-7.8825-6.768-14.7792-13.47-19.4062-6.703-4.6269-14.864-6.6688-22.965-5.7454L12.9922,23.3193L108.141,12.6749c2.118-.2257,4.24.3896,5.906,1.7126s2.742,3.247,2.994,5.355v0Z",
                                                                          fill: "#f47fff",
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M137.053,42.8912l4.45,39.5443c2.278-2.5498,4.209-5.388,5.743-8.441.721-1.3954,1.345-2.8391,1.866-4.3207.23-.6009.43-1.2018.631-1.8313v-.1431l.173-.7153c.295-1.0013.507-2.0254.631-3.0617.46-4.149,6.862-3.1189,6.403,1.0015-.209,1.4544-.536,2.8897-.976,4.2921-.988,3.4033-2.376,6.6785-4.135,9.7573c3.479-3.9599,5.794-8.7991,6.691-13.9854.897-5.1862.341-10.5186-1.605-15.4107-1.947-4.892-5.21-9.1542-9.43-12.3178-4.22-3.1635-9.234-5.1059-14.49-5.6134c2.215,3.3803,3.602,7.2324,4.048,11.2452v0Z",
                                                                          fill: "#f47fff",
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M-6.73351,49.5297c.25761-.0286.5176-.0286.77521,0c1.3094-5.1229,4.15403-9.7265,8.15492-13.1975c4.00089-3.4711,8.96808-5.6447,14.23978-6.2313L108.14,19.8571c2.183-.2729,4.392-.2729,6.575,0l2.325-.2575c-.252-2.1191-1.336-4.0525-3.015-5.377-1.678-1.3246-3.815-1.9324-5.943-1.6906L12.991,23.3194l-3.21561.3434c-7.25704.7992-14.05693,3.9272-19.3752,8.9126s-8.86689,11.5583-10.11109,18.7283c3.7744-2.5168,8.094-4.1054,12.60415-4.6354l.37324,2.8614Z",
                                                                          fill: "#f47fff",
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M21.3185,122.295c1.8232.185,3.6607.185,5.4839,0l91.6746-10.244c1.961-.221,3.888-.673,5.742-1.345c4.202-1.474,7.958-3.989,10.916-7.307c2.958-3.319,5.021-7.3325,5.995-11.664-9.635,7.4631-21.232,11.985-33.391,13.019-.819.031-1.619-.248-2.239-.781-.621-.533-1.017-1.28-1.108-2.091-.09-.812.13-1.627.618-2.2833.487-.6561,1.206-1.1041,2.011-1.2539c7.706-.755,15.208-2.9078,22.137-6.3523c4.643-2.4035,8.8-5.6439,12.259-9.557l-4.364-39.5444c-.446-4.0128-1.833-7.8649-4.048-11.2452-2.032-3.1352-4.717-5.798-7.872-7.8074-3.156-2.0095-6.709-3.3186-10.417-3.8384-2.183-.2729-4.392-.2729-6.575,0L16.4376,30.1008C11.166,30.6874,6.19878,32.861,2.19789,36.332s-6.84552,8.0747-8.15492,13.1976C0.072305,49.7871,6.10164,60.9751,7.70946,75.282c1.69396,14.9364-2.0672,27.584-8.354937,28.299h-.717783c1.296534,4.429,3.74569,8.438,7.09894,11.619s7.49122,5.421,11.99392,6.494c1.1822.276,2.381.477,3.5889.601v0ZM88.1868,93.6807L61.6002,96.5421c-5.8859.6593-11.7936-1.0382-16.424-4.7192-4.6303-3.681-7.6042-9.0441-8.2675-14.9099L34.8128,58.3712c-.2422-2.2035.4013-4.413,1.7894-6.145s3.4082-2.8456,5.618-3.0972l52.6562-5.8659c2.2111-.2413,4.428.3999,6.1656,1.7834c1.738,1.3835,2.856,3.3966,3.108,5.599l2.268,20.2014c.312,2.693.087,5.4209-.661,8.0272s-2.005,5.0398-3.699,7.1611c-1.694,2.1212-3.7907,3.8885-6.171,5.2004s-4.9971,2.1429-7.7002,2.4451v0ZM122.095,65.9825c-1.551.1793-3.119-.105-4.507-.8166-1.387-.7116-2.531-1.8184-3.286-3.1797s-1.086-2.9155-.952-4.465.727-3.0243,1.705-4.2368c.977-1.2124,2.294-2.1078,3.784-2.5723c1.489-.4644,3.083-.4769,4.58-.0359c1.496.4411,2.827,1.3157,3.824,2.5127.996,1.197,1.613,2.6623,1.771,4.2095.21,2.0499-.398,4.0999-1.693,5.7063-1.295,1.6065-3.173,2.6403-5.226,2.8778ZM12.5042,71.133c-.1799-1.5449.1054-3.1082.8194-4.4911s1.8246-2.5229,3.1905-3.275s2.9255-1.0824,4.4802-.9488c1.5548.1335,3.0346.725,4.2512,1.699s2.115,2.2866,2.581,3.7709.4786,3.0731.036,4.5646c-.4425,1.4914-1.3201,2.8179-2.5211,3.8109s-2.6714,1.6075-4.2238,1.7654c-2.057.2093-4.1139-.3969-5.7258-1.6874s-2.6492-3.1616-2.8876-5.2085v0Z",
                                                                          fill: "#7196ff",
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M104.15,50.7315c-.252-2.2024-1.37-4.2155-3.108-5.5989-1.7376-1.3835-3.9546-2.0247-6.1656-1.7834L42.2202,49.215c-2.2099.2516-4.2299,1.3652-5.618,3.0973-1.3882,1.732-2.0316,3.9414-1.7895,6.145L36.9086,76.999c.6634,5.8658,3.6372,11.2289,8.2676,14.9099c4.6303,3.681,10.538,5.3785,16.424,4.7192l26.5865-2.8614c5.4428-.611,10.4198-3.3498,13.8383-7.6149c3.418-4.2651,4.998-9.7078,4.393-15.1331L104.15,50.7315ZM71.7927,82.8076l-11.4845,1.259c-.9556.1063-1.9145-.1702-2.6656-.7685s-1.233-1.4695-1.3396-2.4219.1708-1.908.7711-2.6566s1.4745-1.2288,2.4302-1.335L69.6106,75.74c.9576-.0968,1.9152.1846,2.6668.7839s1.2374,1.4685,1.3528,2.4209c.2584,1.9743.1435,3.6625-1.8375,3.8628ZM93.0389,80.776l-7.2352.8012c-.4899.0839-.9919.0671-1.4751-.0494-.4831-.1166-.9373-.3303-1.3345-.6282s-.7291-.6734-.9754-1.1038c-.2462-.4304-.4015-.9064-.4564-1.3988s-.0082-.9907.1372-1.4644c.1455-.4738.3865-.9129.7085-1.2903.3219-.3775.7179-.6854,1.1636-.9048s.9317-.3456,1.4282-.3709l7.2352-.8012c.9283-.0474,1.8397.2603,2.548.8603.7082.5999,1.1598,1.4468,1.2625,2.3676.1026.9207-.1514,1.8457-.7103,2.586s-1.3802,1.2399-2.2963,1.3967v0Z",
                                                                          fill: "#a9c7ff",
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M120.401,50.5311c-1.551.1572-3.021.7704-4.222,1.7617s-2.079,2.316-2.523,3.8059-.434,3.0775.029,4.5616c.464,1.484,1.359,2.7973,2.573,3.7731c1.213.9757,2.691,1.57,4.244,1.7073c1.554.1372,3.113-.1888,4.48-.9365c1.367-.7478,2.48-1.8836,3.198-3.2633.718-1.3796,1.009-2.9408.835-4.4852-.246-2.046-1.284-3.9153-2.893-5.209-1.61-1.2937-3.662-1.9093-5.721-1.7156v0Z",
                                                                          fill: "#202225",
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M21.2034,78.0291c1.5438-.1627,3.0044-.7786,4.1965-1.7697c1.1921-.991,2.0621-2.3126,2.4997-3.797s.4229-3.0649-.0421-4.5411-1.3592-2.7814-2.5695-3.7504-2.682-1.5579-4.2285-1.6922-3.0984.1922-4.4585.9379c-1.3602.7458-2.4675,1.8773-3.1816,3.2511s-1.0027,2.9279-.8294,4.4654c.2312,2.05,1.2666,3.9257,2.8803,5.2176s3.6747,1.8953,5.7331,1.6784v0Z",
                                                                          fill: "#202225",
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M92.2341,73.5653l-7.2352.8012c-.4965.0253-.9825.1516-1.4282.371s-.8417.5272-1.1636.9047c-.322.3775-.563.8166-.7085,1.2903-.1454.4737-.1921.9721-.1372,1.4645s.2102.9684.4564,1.3987c.2463.4304.5782.806.9754,1.1039.3972.2978.8514.5116,1.3345.6281.4832.1165.9852.1334,1.4751.0495l7.2352-.8012c.9161-.1569,1.7375-.6565,2.2963-1.3968.5589-.7402.8129-1.6653.7103-2.586-.1027-.9207-.5543-1.7676-1.2625-2.3676s-1.6197-.9077-2.548-.8603Z",
                                                                          fill: "#7196ff",
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M69.6688,75.7397L59.5625,76.8843c-.4732.0526-.9313.1976-1.3483.4267-.417.229-.7846.5377-1.0818.9084s-.5184.796-.6507,1.2518-.1733.9332-.1205,1.4047.1983.9282.4281,1.3438c.2299.4155.5396.7819.9115,1.0781.3719.2963.7988.5167,1.2561.6485.4574.1319.9363.1727,1.4095.1201l11.4845-1.259c1.981-.2003,2.0959-1.8886,1.8949-3.8629-.1151-.9634-.609-1.842-1.3734-2.4428s-1.7367-.8749-2.7036-.762Z",
                                                                          fill: "#7196ff",
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M-6.73361,49.5295c-6.28779.6868-10.04889,13.3627-8.38369,28.2705c1.6366,14.3069,7.75204,25.752,13.86752,25.752h.602926C5.64089,102.837,9.40204,90.1898,7.70809,75.2534C6.10026,60.9465,0.070929,49.7871,-5.95841,49.5009c-.2576-.0286-.5176-.0286-.7752,0v.0286Z",
                                                                          fill: "#f47fff",
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M225.455,25.4939l-36.377-6.152c-.749-.1354-1.518-.1211-2.261.0422-.744.1633-1.447.4722-2.069.9089-.623.4367-1.152.9923-1.557,1.6347-.405.6423-.678,1.3585-.803,2.1069l-7.551,44.3801-1.062,7.2965c-.25,1.4905.102,3.019.979,4.252.876,1.233,2.207,2.0702,3.701,2.3292l10.824,1.8312l31.582,5.3794c.805.1297,1.628.0871,2.416-.1251.787-.2121,1.519-.5889,2.149-1.1053l.029-62.7787Z",
                                                                          fill: "#d4e4ff",
                                                                      }),
                                                                      (0, i.jsx)("path", {
                                                                          d: "M198.237,35.5948c3.614,3.2179,6.238,7.3908,7.57,12.0348c1.331,4.644,1.315,9.569-.048,14.204-.301,1.0466-.823,2.0169-1.531,2.846s-1.586,1.4977-2.575,1.9612c-.828.395-1.758.5299-2.666.3868-.907-.143-1.749-.5573-2.415-1.188-.623-.9681-.904-2.1149-.8-3.2598s.587-2.2228,1.374-3.0639c1.403-1.7183,3.249-3.0238,5.34-3.777c2.387-.8759,4.96-1.128,7.473-.7323s4.882,1.426,6.883,2.9928c2.124,1.7454,5.168-1.259,3.043-3.0331-2.393-1.9775-5.23-3.3487-8.27-3.9964-3.04-.6478-6.191-.5529-9.186.2766-5.743,1.6596-12.03,6.896-10.939,13.563s9.13,8.1835,14.011,4.521c4.881-3.6626,6-11.6745,5.311-17.712-.699-7.3159-4.107-14.1099-9.561-19.0568-2.095-1.8027-5.168,1.2304-3.072,3.0331h.058Z",
                                                                          fill: "#3e70dd",
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, i.jsx)("g", {
                                                                  filter: c("filter6"),
                                                                  children: (0, i.jsx)("rect", {
                                                                      width: "218",
                                                                      height: "150",
                                                                      rx: "16",
                                                                      ry: "16",
                                                                      fill: "#5865f2",
                                                                      fillOpacity: "0.36",
                                                                  }),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)("clipPath", {
                                                          id: a("windowCard-clip"),
                                                          children: (0, i.jsx)("rect", {
                                                              width: "218",
                                                              height: "150",
                                                              rx: "16",
                                                              ry: "16",
                                                              fill: "#fff",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)("ellipse", {
                                                  rx: "3.9077",
                                                  ry: "4",
                                                  transform: "translate(15.9077 16)",
                                                  fill: "#2e2f32",
                                                  fillOpacity: "0.74",
                                              }),
                                              (0, i.jsx)("ellipse", {
                                                  rx: "3.9077",
                                                  ry: "4",
                                                  transform: "translate(28 16)",
                                                  fill: "#2e2f32",
                                                  fillOpacity: "0.74",
                                              }),
                                              (0, i.jsx)("ellipse", {
                                                  rx: "3.9077",
                                                  ry: "4",
                                                  transform: "translate(40.0923 16)",
                                                  fill: "#2e2f32",
                                                  fillOpacity: "0.74",
                                              }),
                                          ],
                                      }),
                                  }),
                                  (0, i.jsx)("g", {
                                      className: eZ.Hl,
                                      transform: "translate(197,127) scale(0.8,0.8)",
                                      children: (0, i.jsxs)("g", {
                                          className: eZ.no,
                                          transform: "translate(-87,-127)",
                                          opacity: "0",
                                          children: [
                                              (0, i.jsx)("rect", {
                                                  className: eZ.DP,
                                                  width: "86",
                                                  height: "86",
                                                  rx: "24",
                                                  ry: "24",
                                                  transform: "translate(44 84)",
                                                  fill: c("buttonOverWindowHighlight-fill"),
                                                  fillOpacity: "0.2",
                                              }),
                                              (0, i.jsxs)("g", {
                                                  transform: "translate(.750001 0)",
                                                  children: [
                                                      (0, i.jsx)("path", {
                                                          d: "M71.9512,105.5c-3.5622,0-6.45,2.888-6.45,6.45v17.2c0,3.562,2.8878,6.45,6.45,6.45h30.0998c3.562,0,6.45-2.888,6.45-6.45v-17.2c0-3.562-2.888-6.45-6.45-6.45h-30.0998Z",
                                                          fill: "#fff",
                                                      }),
                                                      (0, i.jsx)("path", {
                                                          d: "M90.2262,144.2c-.5937,0-1.075-.481-1.075-1.075v-4.3c0-.594-.4813-1.075-1.075-1.075h-2.15c-.5937,0-1.075.481-1.075,1.075v4.3c0,.594-.4813,1.075-1.075,1.075h-3.225c-1.1874,0-2.15.963-2.15,2.15s.9626,2.15,2.15,2.15h12.9c1.1874,0,2.15-.963,2.15-2.15s-.9626-2.15-2.15-2.15h-3.225Z",
                                                          fill: "#fff",
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                                  (0, i.jsx)("g", {
                                      className: eZ.Rq,
                                      transform: "translate(206.707,213.525767)",
                                      children: (0, i.jsx)("g", {
                                          className: eZ.DF,
                                          transform: "scale(1,1)",
                                          children: (0, i.jsxs)("g", {
                                              className: eZ.Dy,
                                              transform: "translate(-206.5,-172.653503)",
                                              children: [
                                                  (0, i.jsx)("path", {
                                                      d: "M194,187.542L194,153l25,25.06h-14.626l-.886.268L194,187.542Z",
                                                      clipRule: "evenodd",
                                                      fill: "#fff",
                                                      fillRule: "evenodd",
                                                  }),
                                                  (0, i.jsx)("path", {
                                                      d: "M213.594,188.996l-7.776,3.311L195.72,168.39l7.95-3.35l9.924,23.956Z",
                                                      clipRule: "evenodd",
                                                      fill: "#fff",
                                                      fillRule: "evenodd",
                                                  }),
                                                  (0, i.jsx)("path", {
                                                      d: "M210.718,187.528l-3.977,1.669-6.687-15.904l3.971-1.672l6.693,15.907Z",
                                                      clipRule: "evenodd",
                                                      fill: "#000",
                                                      fillRule: "evenodd",
                                                  }),
                                                  (0, i.jsx)("path", {
                                                      d: "M196.157,158.192v24.131l6.404-6.182.923-.3h10.284l-17.611-17.649Z",
                                                      clipRule: "evenodd",
                                                      fill: "#000",
                                                      fillRule: "evenodd",
                                                  }),
                                              ],
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
    });
});
var eB = s(325278),
    eV = s(818348),
    eQ = s(538298);
function eW(e) {
    let { id: t, text: s, icon: l, selected: r, onClick: a } = e;
    return (0, i.jsx)(P.D, {
        role: "radio",
        "aria-checked": r,
        onClick: () => a(t),
        tabIndex: 0,
        className: n()(eQ.tp, eQ.ey, { [eQ.wH]: r }),
        children: (0, i.jsxs)("div", {
            className: eQ.DD,
            children: [
                (0, i.jsx)(l, { size: "lg" }),
                (0, i.jsx)(F.E, { variant: "text-sm/medium", color: "none", children: s }),
            ],
        }),
    });
}
function ez(e) {
    let { onSourceSelect: t } = e;
    (0, U.jd)(),
        (function (e, t) {
            let { lastPickerAction: s, lastPickerError: i } = (0, u.bG)([U.Ay], () => U.Ay.getPickerState()),
                [r, n] = l.useState(!1),
                a = (0, eF.A)(e),
                c = (0, eF.A)(t);
            (0, U.XA)(),
                l.useEffect(() => {
                    r
                        ? s === U.JA.Update
                            ? a.current()
                            : s === U.JA.Cancel && ((0, L.E)(), c.current())
                        : (null == s || s === U.JA.Present) && n(!0);
                }, [r, s, a, c]);
        })(t, eV.FX);
    let [{ nativeSourceType: s }, r] = eG(),
        n = (0, M.isMac)() && c().satisfies(A.A?.os.release, eB.WZ),
        a = N.Ay.getUseGamescopeCapture(),
        o = a ? "gamescope" : "screen";
    return (0, i.jsxs)("div", {
        className: eQ.zr,
        children: [
            (0, i.jsx)(eP.D, {
                className: eQ.wx,
                variant: "heading-lg/semibold",
                color: "text-default",
                children: ec.intl.string(ec.t.XyYoFc),
            }),
            n
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(F.E, {
                              className: eQ.rf,
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ec.intl.format(ec.t.sbbPhW, { buttonName: ec.intl.string(ec.t.FiBjwU) }),
                          }),
                          (0, i.jsx)(eH, {}),
                      ],
                  })
                : (0, i.jsxs)("div", {
                      className: eQ.Ro,
                      children: [
                          (0, i.jsx)(eW, {
                              selected: s === o,
                              onClick: () => {
                                  r({ type: "set_native_source_type", sourceType: o });
                              },
                              id: "screen",
                              text: ec.intl.string(ec.t.cVUFXY),
                              icon: p.k,
                          }),
                          !a &&
                              (0, i.jsx)(eW, {
                                  selected: "window" === s,
                                  onClick: () => {
                                      r({ type: "set_native_source_type", sourceType: "window" });
                                  },
                                  id: "window",
                                  text: ec.intl.string(ec.t.dG2A1E),
                                  icon: h.W,
                              }),
                      ],
                  }),
        ],
    });
}
var eq = s(843402),
    eX = s(859703),
    e$ = s(975571),
    eY = s(290805),
    eJ = s(971276),
    eK = s(639214),
    e1 = s(495163);
function e2(e, t, s, i) {
    let l = (0, M.isWindows)() ? (0, G.A)(_.Ay, R.A) : null,
        r = _.Ay.getRunningGames(),
        n = s?.split(":")[1],
        a = e.id.split(":")[1];
    if (null != n && n === a) return 0;
    if (null != t && t === e.id) return 5;
    if (null != l && (0, ex.A)(e.id, l.windowHandle)) return 4;
    if (null != r.find((t) => (0, ex.A)(e.id, t.windowHandle))) return 3;
    let c = i?.[a];
    return null != c && eB.F2.has(c) ? 2 : 1;
}
function e0(e) {
    let { source: t } = e;
    return t.id.startsWith(d.fS.SCREEN)
        ? (0, i.jsx)(p.k, { size: "xs" })
        : t.id.startsWith(d.fS.WINDOW)
          ? null != t.icon && "" !== t.icon
              ? (0, i.jsx)("img", { src: t.icon, className: e1.pI, alt: "" })
              : (0, i.jsx)(h.W, { size: "xs" })
          : (0, i.jsx)(x.n, { size: "xs" });
}
function e5(e) {
    let { source: t, selected: s, onClick: l, hoverCTA: r } = e,
        { url: a, name: c } = t;
    return (0, i.jsxs)(P.D, {
        onClick: () => l(t),
        className: n()(e1.sP, { [e1.Lv]: s }),
        children: [
            (0, i.jsx)("div", {
                className: e1.ji,
                children: (0, i.jsxs)("div", {
                    className: e1.KG,
                    children: [
                        (0, i.jsx)("img", { src: a, className: e1.f5, alt: "" }),
                        (0, i.jsx)("div", {
                            className: e1.qe,
                            children: (0, i.jsx)("div", {
                                className: e1.K3,
                                children: (0, i.jsx)(F.E, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    children: r,
                                }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsxs)("div", {
                className: e1.Uw,
                children: [
                    (0, i.jsx)(e0, { source: t }),
                    (0, i.jsx)(F.E, { variant: "text-sm/medium", className: e1.VZ, children: c }),
                ],
            }),
        ],
    });
}
function e3(e) {
    var t;
    let s,
        { onClick: r } = e,
        [
            {
                windowSources: n,
                deviceSources: a,
                screenSources: o,
                sourceType: f,
                fetchingSources: h,
                selectedSource: x,
                discordSourceId: p,
                hasPermission: m,
            },
        ] = eG(),
        j = (0, u.bG)([_.Ay], () => _.Ay.getRunningGames()),
        v = (0, u.cf)([_.Ay], () => {
            let e = _.Ay.getCandidateGames(),
                t = {};
            for (let s of e) null != s.windowHandle && (t[s.windowHandle] = s.exeName);
            return t;
        }),
        S =
            ((t = (0, u.bG)([eX.A], () => eX.A.quests)),
            (s = (0, eJ.s)()),
            l.useMemo(() => {
                if (null == n || !s) return null;
                for (let e of n) {
                    let s = j.find((t) => (0, ex.A)(e.id, t.windowHandle));
                    if (s?.id == null) continue;
                    let i = (0, eK.L7)(t, s.id);
                    if (null != i && i.userStatus?.enrolledAt != null && i.userStatus?.completedAt == null)
                        return { source: e, quest: i };
                }
                return null;
            }, [s, t, j, n]));
    l.useEffect(() => ((0, eq.a2)(), eq.e0), []);
    let C = l.useMemo(() => [...n].sort((e, t) => e2(t, S?.source.id, p, v) - e2(e, S?.source.id, p, v)), [S, n, p, v]);
    if (h) {
        if (!1 === m) {
            let e = !1;
            if ((0, M.isMac)()) {
                let t = A.A?.app.getVersion();
                e = !eY.M || "0.0.0" === t || c().satisfies(t, "0.0.363");
            }
            return (0, i.jsxs)("div", {
                className: e1.Ye,
                children: [
                    (0, i.jsxs)(F.E, {
                        className: e1.kc,
                        variant: "text-md/normal",
                        color: "text-feedback-critical",
                        children: [
                            ec.intl.string(ec.t["kW5h/W"]),
                            (0, i.jsx)("br", {}),
                            ec.intl.string(ec.t["5Jvu1R"]),
                        ],
                    }),
                    e &&
                        (0, i.jsx)(g.$, {
                            text: ec.intl.string(ec.t["XgZk+u"]),
                            onClick: () => {
                                eE.A.openSettings(eO.iL.SCREEN_RECORDING);
                            },
                        }),
                ],
            });
        }
        return (0, i.jsx)("div", { className: e1.Lq, children: (0, i.jsx)(eh.y, {}) });
    }
    let y = [];
    return ((y = f === d.fS.WINDOW ? C : f === d.fS.SCREEN ? o : a), f === d.fS.CAMERA && 0 === y.length)
        ? (0, i.jsx)(e4, {})
        : (0, i.jsx)("div", {
              className: e1.zr,
              children: y.map((e) =>
                  (0, i.jsx)(
                      e5,
                      {
                          onClick: r,
                          source: e,
                          hoverCTA: f === d.fS.CAMERA ? ec.intl.string(ea.default.e72JFB) : ec.intl.string(ec.t.z7WGhv),
                          selected: null != x && "windowHandle" in x ? (0, ex.A)(e.id, x.windowHandle) : x?.id === e.id,
                      },
                      e.id,
                  ),
              ),
          });
}
function e4() {
    return (0, i.jsxs)("div", {
        className: e1.p$,
        children: [
            (0, i.jsx)(x.n, { size: "md", color: V.A.colors.ICON_MUTED, className: e1.Dw }),
            (0, i.jsx)(F.E, {
                variant: "text-lg/medium",
                color: "text-strong",
                className: e1.jU,
                children: ec.intl.string(ea.default["/z3YaZ"]),
            }),
            (0, i.jsx)(F.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                className: e1.C3,
                children: ec.intl.string(ea.default.agwSGA),
            }),
            (0, i.jsx)(F.E, {
                variant: "text-sm/semibold",
                children: ec.intl.format(ea.default.xpVzr3, { helpdeskURL: e$.A.getArticleURL(0x53d41ade17) }),
            }),
        ],
    });
}
var e7 = s(505312),
    e8 = s(922016),
    e9 = s(408278),
    e6 = s(403581),
    te = s(980707),
    tt = s(477782),
    ts = s(270816),
    ti = s(498642),
    tl = s(309010),
    tr = s(366340);
function tn(e) {
    switch (e) {
        case eI.jQ.PRESET_CUSTOM:
            return ec.intl.string(ec.t["+eOtrD"]);
        case eI.jQ.PRESET_DOCUMENTS:
            return ec.intl.string(ec.t["rCa/jL"]);
        case eI.jQ.PRESET_VIDEO:
            return ec.intl.string(ea.default["G+k1q2"]);
        case eI.jQ.PRESET_AUTO:
            return ec.intl.string(ea.default.VQ3gwU);
        case eI.jQ.PRESET_MOBILE_DEFAULT:
            return ec.intl.string(tr.default["2qmQ8N"]);
        case eI.jQ.PRESET_MOBILE_PERFORMANCE:
            return ec.intl.string(tr.default["5eO4/m"]);
        case eI.jQ.PRESET_MOBILE_HIGH_QUALITY:
            return ec.intl.string(tr.default.nMcXo1);
        default:
            throw Error(`Not case implemented for ${e}`);
    }
}
function ta(e) {
    return e === eI.on.RESOLUTION_SOURCE ? ec.intl.string(ec.t.XjXqzh) : `${e}p`;
}
function tc() {
    let e = (0, u.bG)([tl.A, Y.A], () => Y.A.getChannel(tl.A.getVoiceChannelId())),
        t = e?.getGuildId();
    return (0, u.bG)([ee.A], () => (null != t ? ee.A.getGuild(t)?.premiumTier : null));
}
var to = s(192308);
let td = (e) => {
    let { analyticsLocation: t, onClose: l } = e;
    (0, to.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            s.e("43778"),
            s.e("62680"),
            s.e("21825"),
            s.e("98125"),
            s.e("18441"),
            s.e("76640"),
            s.e("14879"),
            s.e("86949"),
            s.e("99657"),
            s.e("62827"),
            s.e("93475"),
            s.e("18630"),
        ]).then(s.bind(s, 826789));
        return (s) => (0, i.jsx)(e, { ...s, analyticsSource: t, onClose: () => (l?.(), s.onClose?.()) });
    });
};
var tu = s(837859);
function tf(e) {
    let t = (0, u.bG)([O.default], () => O.default.getCurrentUser()),
        s = (0, u.bG)([tl.A, Y.A], () => Y.A.getChannel(tl.A.getVoiceChannelId())),
        i = s?.getGuildId(),
        l = (0, u.bG)([ee.A], () => (null != i ? ee.A.getGuild(i)?.premiumTier : null));
    return (0, tu.Ay)(e, t, l);
}
var th = s(731854),
    tx = s(396989);
let tp = [
        {
            value: eI.jQ.PRESET_AUTO,
            canUse: (e) => e !== d.fS.CAMERA && (0, ew.eO)({ location: "StreamOptionsMenu" }).allowAutoQuality,
        },
        { value: eI.jQ.PRESET_VIDEO, canUse: (e) => !0 },
        { value: eI.jQ.PRESET_DOCUMENTS, canUse: (e) => e !== d.fS.CAMERA },
        { value: eI.jQ.PRESET_CUSTOM, canUse: (e) => !0 },
    ],
    tm = [
        { value: eI.on.RESOLUTION_720, canUse: (e) => !0 },
        { value: eI.on.RESOLUTION_1080, canUse: (e) => !0 },
        { value: eI.on.RESOLUTION_1440, canUse: (e) => !0 },
        { value: eI.on.RESOLUTION_SOURCE, canUse: (e) => e !== d.fS.CAMERA },
    ],
    tj = [eI.kn.FPS_15, eI.kn.FPS_30, eI.kn.FPS_60];
function tg(e) {
    let { label: t } = e;
    return (0, i.jsxs)("div", {
        className: tx.g,
        children: [t, (0, i.jsx)(e6.t, { size: "xs", color: V.A.unsafe_rawColors.GUILD_BOOSTING_PINK })],
    });
}
function tv(e) {
    let { onClose: t, onSelect: s } = e,
        [
            {
                audioSourceId: l,
                notifyFriends: r,
                hidePreview: n,
                muteStreamAudio: a,
                preset: c,
                resolution: o,
                fps: f,
                sourceType: h,
            },
            x,
        ] = eG(),
        p = (0, u.bG)([tl.A], () => tl.A.getVoiceChannelId()),
        m = (0, u.bG)([Y.A, ti.A], () => {
            if (null == p) return !0;
            let e = Y.A.getChannel(p),
                t = e?.guild_id;
            if (null == t) return !0;
            let s = ti.A.getMemberCount(t);
            return null == s || (s > eB.oe && s <= eB.G1);
        }, [p]),
        j = tc(),
        [g, v] = tf(eI.jQ.PRESET_VIDEO) ?? [eI.on.RESOLUTION_720, eI.kn.FPS_30],
        [S, A] = tf(eI.jQ.PRESET_DOCUMENTS) ?? [eI.on.RESOLUTION_SOURCE, eI.kn.FPS_15],
        C = (0, ts.H)({
            deviceType: th.oh.AUDIO_INPUT,
            selectedDeviceId: l,
            analyticsLocations: [y.A.GO_LIVE_MODAL_SETTINGS_SELECTION],
            asSubmenu: !0,
            onDeviceSelect: (e) => (x({ type: "set_audio_source", audioSourceId: e }), !1),
            menuItemOverrideProps: {
                id: "device-audio-input",
                label: ec.intl.string(ea.default.YSdHVw),
                subtextLineClamp: 1,
            },
            computeMenuRadioItemOverrideProps: (e) => ({
                group: "device-audio-input-group",
                id: `device-audio-input-${e}`,
            }),
        });
    return (0, i.jsxs)(te.W, {
        "data-menu-needs-migration": !0,
        "aria-label": ec.intl.string(ec.t["+1H47t"]),
        navId: "stream-options",
        onClose: t,
        onSelect: s,
        children: [
            (0, i.jsx)(tt.rX, {
                label: ec.intl.string(ea.default.P2pjmy),
                children: tp
                    .filter((e) => {
                        let { canUse: t } = e;
                        return t(h);
                    })
                    .map((e) => {
                        let { value: t } = e;
                        return (0, i.jsx)(
                            tt.iD,
                            {
                                group: "preset",
                                id: `stream-preset-${t}`,
                                checked: c === t,
                                label: tn(t),
                                subtext: (function (e) {
                                    switch (e) {
                                        case eI.jQ.PRESET_VIDEO:
                                            return ec.intl.format(ea.default.G5O1Mz, {
                                                resolution: ta(g),
                                                frameRate: v,
                                            });
                                        case eI.jQ.PRESET_DOCUMENTS:
                                            return ec.intl.format(ea.default["8tcFL5"], {
                                                resolution: ta(S),
                                                frameRate: A,
                                            });
                                        case eI.jQ.PRESET_AUTO:
                                            return ec.intl.string(ea.default.m4jtlc);
                                        case eI.jQ.PRESET_CUSTOM:
                                        case eI.jQ.PRESET_MOBILE_DEFAULT:
                                        case eI.jQ.PRESET_MOBILE_HIGH_QUALITY:
                                        case eI.jQ.PRESET_MOBILE_PERFORMANCE:
                                            return;
                                        default:
                                            throw Error(`No case implemented for ${e}`);
                                    }
                                })(t),
                                action: () => x({ type: "set_preset", preset: t }),
                            },
                            t,
                        );
                    }),
            }),
            c === eI.jQ.PRESET_CUSTOM &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tt.bX, {}),
                        (0, i.jsx)(tt.Dr, {
                            id: "resolution",
                            label: ec.intl.string(ea.default.IG5n0X),
                            children: tm
                                .filter((e) => {
                                    let { canUse: t } = e;
                                    return t(h);
                                })
                                .map((e) => {
                                    let { value: s } = e;
                                    return (0, i.jsx)(
                                        tt.iD,
                                        {
                                            group: "resolution",
                                            id: `stream-option-resolution-${s}`,
                                            checked: o === s,
                                            void_label:
                                                s !== eI.on.RESOLUTION_720 ? (0, i.jsx)(tg, { label: ta(s) }) : ta(s),
                                            action: () =>
                                                (function (e) {
                                                    if (!(0, eN.A)(c, e, f, O.default.getCurrentUser(), j))
                                                        return (
                                                            t(),
                                                            td({
                                                                analyticsLocation: y.A.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                                            })
                                                        );
                                                    x({ type: "set_resolution", resolution: e });
                                                })(s),
                                        },
                                        s,
                                    );
                                }),
                        }),
                        (0, i.jsx)(tt.Dr, {
                            id: "frame-rate",
                            label: ec.intl.string(ec.t.SkkeIt),
                            children: tj.map((e) =>
                                (0, i.jsx)(
                                    tt.iD,
                                    {
                                        group: "frame-rate",
                                        id: `stream-option-frame-rate-${e}`,
                                        checked: f === e,
                                        void_label:
                                            e === eI.kn.FPS_60 ? (0, i.jsx)(tg, { label: `${e}fps` }) : `${e}fps`,
                                        action: () =>
                                            (function (e) {
                                                if (!(0, eN.A)(c, o, e, O.default.getCurrentUser(), j))
                                                    return (
                                                        t(),
                                                        td({ analyticsLocation: y.A.GO_LIVE_MODAL_SETTINGS_SELECTION })
                                                    );
                                                x({ type: "set_fps", fps: e });
                                            })(e),
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, i.jsx)(tt.bX, {}),
            (0, i.jsx)(tt.sL, {
                id: "stream-option-mute",
                checked: a,
                label: ec.intl.string(ea.default["b0+Irf"]),
                action: () => x({ type: "set_mute_audio", value: !a }),
            }),
            h === d.fS.CAMERA && C,
            (0, i.jsxs)(tt.Dr, {
                id: "advanced-items",
                label: ec.intl.string(ea.default.eYyK1v),
                children: [
                    (0, i.jsx)(tt.sL, {
                        id: "stream-option-share-preview",
                        checked: n,
                        label: ec.intl.string(ea.default.H3QjqX),
                        action: () => x({ type: "set_hide_preview", hidePreview: !n }),
                    }),
                    m &&
                        (0, i.jsx)(tt.sL, {
                            id: "stream-option-notify",
                            checked: r,
                            label: ec.intl.string(ea.default.SiHtXy),
                            action: () => x({ type: "set_notify_friends", value: !r }),
                        }),
                ],
            }),
        ],
    });
}
function tS(e) {
    let { align: t = "left" } = e,
        s = l.useRef(null),
        r = (0, e7.w)();
    return (0, i.jsx)(e8.Y, {
        targetElementRef: s,
        position: "top",
        align: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tv, { onClose: t, onSelect: void 0 });
        },
        children: (e) =>
            (0, i.jsx)(e9.K, {
                buttonRef: s,
                size: "md",
                variant: "secondary",
                icon: r.Component,
                "aria-label": ec.intl.string(ec.t["+1H47t"]),
                ...e,
                ...r.events,
            }),
    });
}
var tA = s(167338);
function tC(e) {
    let { onClose: t } = e,
        { analyticsLocations: s } = (0, E.Ay)(y.A.GO_LIVE_MODAL_V2);
    return (0, i.jsx)(j.I, {
        options: [
            { name: "SD", value: "sd" },
            { name: "HD", value: "hd", className: tA.T },
        ],
        className: tA.g,
        value: "sd",
        look: "pill",
        onChange: function (e) {
            "hd" === e.value && td({ analyticsLocation: s?.[0], onClose: t });
        },
    });
}
var ty = s(862482),
    tE = s(194261),
    t_ = s(404374),
    tw = s(422936),
    tN = s(234419),
    tI = s(725807),
    tO = s(511484),
    tR = s(400669),
    tM = s(909536),
    tT = s(788868),
    tL = s(518728);
function tU(e) {
    let { onClose: t } = e,
        { analyticsLocations: s } = (0, E.Ay)(y.A.GO_LIVE_MODAL_V2),
        l = (0, tM.St)("hd_streaming_upsell_ribbon"),
        r = (0, tN.V)(),
        n = (0, tw.O)(),
        a = r?.subscription_trial?.sku_id === tT.pe.TIER_2 || (0, tO.U9)(n, tT.pe.TIER_2),
        c = ec.intl.string(ea.default["+f+cqk"]);
    return (
        a &&
            (null != r
                ? (c = (0, T.FY)({
                      intervalType: r?.subscription_trial?.interval,
                      intervalCount: r?.subscription_trial?.interval_count,
                  }))
                : null != n && (c = ec.intl.formatToPlainString(ec.t.bkQ4bH, { percent: n.discount.amount }))),
        (0, i.jsxs)("div", {
            className: tL.zr,
            children: [
                (0, i.jsxs)(F.E, {
                    className: tL.aV,
                    variant: "text-xs/normal",
                    color: "always-white",
                    children: [
                        (0, i.jsx)(tE.X, { size: "xxs", color: "currentColor" }),
                        ec.intl.format(ec.t.sLJ3EV, {
                            onNitroClick: function () {
                                td({ analyticsLocation: s[0], onClose: t });
                            },
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tL.OQ,
                    children: [
                        l &&
                            (0, i.jsx)(tR.l, {
                                size: "sm",
                                className: tL.ij,
                                location: y.A.PREMIUM_WISHLIST_STREAM_UPSELL,
                            }),
                        (0, i.jsx)(tI.A, {
                            className: tL.lI,
                            iconClassName: tL.PC,
                            size: ty.$n.Sizes.TINY,
                            color: ty.$n.Colors.BRAND_INVERTED,
                            subscriptionTier: tT.pe.TIER_2,
                            buttonShineClassName: tL.vb,
                            iconColor: t_.k0.PREMIUM_TIER_2,
                            onClick: () => {
                                t();
                            },
                            textOptions: { subscribeText: c, textClassName: tL.U_ },
                        }),
                    ],
                }),
            ],
        })
    );
}
var tG = s(183623),
    tb = s(625903),
    tD = s(358618),
    tP = s(627363),
    tF = s(137177),
    tk = s(74848);
function tZ(e) {
    return e.hasOwnProperty("pid");
}
var tH = s(638495);
function tB() {
    return (0, i.jsx)("span", { className: tH.gO, children: "\u2022" });
}
function tV(e) {
    let { source: t } = e,
        { data: s } = (0, tP.YY)(null != t && tZ(t) ? t.id : void 0);
    return null == t
        ? (0, i.jsx)(tG.F, { className: tH.Jd, size: "md", color: "currentColor" })
        : tZ(t)
          ? (0, i.jsx)(tF.A, { game: s, pid: t.pid })
          : null == t.icon || "" === t.icon
            ? (0, i.jsx)(tG.F, { className: tH.Jd, size: "md", color: "currentColor" })
            : (0, i.jsx)("img", { src: t.icon, alt: "", className: tH.pI });
}
function tQ() {
    let [{ preset: e, resolution: t, fps: s, muteStreamAudio: l, selectedSource: r, sourceType: a, audioSourceId: c }] =
            eG(),
        o = (0, tk.tR)(th.oh.AUDIO_INPUT),
        [f, h] = tf(e) ?? [t, s],
        x = tn(e),
        p = ta(f),
        m = a === d.fS.CAMERA,
        j = null != r,
        g = null != r ? r?.id?.startsWith(d.fS.CAMERA) : m,
        v = e === eI.jQ.PRESET_AUTO,
        S = j
            ? void 0
            : e === eI.jQ.PRESET_VIDEO
              ? ec.intl.string(ea.default.MuHUFe)
              : e === eI.jQ.PRESET_DOCUMENTS
                ? ec.intl.string(ea.default.y0JuYR)
                : e === eI.jQ.PRESET_AUTO
                  ? ec.intl.string(ea.default.m4jtlc)
                  : void 0,
        A = (0, u.bG)([N.Ay], () => N.Ay.getUseSystemScreensharePicker() && (0, M.isLinux)());
    return (0, i.jsxs)("div", {
        className: tH.zr,
        children: [
            j && (0, i.jsx)(tV, { source: r }),
            (0, i.jsxs)("div", {
                className: tH.z,
                children: [
                    (0, i.jsx)(F.E, {
                        className: tH.fB,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: j ? (r?.name ?? ec.intl.string(ea.default["hJMA+x"])) : x,
                    }),
                    (0, i.jsxs)(F.E, {
                        className: tH.kI,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: [
                            j &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsxs)("span", {
                                            className: tH.x5,
                                            children: [
                                                (0, i.jsx)(tb.Z, {
                                                    className: tH.Kk,
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                x,
                                            ],
                                        }),
                                        (0, i.jsx)(tB, {}),
                                    ],
                                }),
                            null != S && (0, i.jsx)("span", { children: S }),
                            !v &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(tB, {}),
                                        (0, i.jsx)("span", { children: p }),
                                        (0, i.jsx)(tB, {}),
                                        (0, i.jsx)("span", { children: `${h}fps` }),
                                    ],
                                }),
                            l &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(tB, {}),
                                        (0, i.jsxs)("span", {
                                            className: tH.x5,
                                            children: [
                                                (0, i.jsx)(tD._, {
                                                    className: n()(tH.Kk, tH.tG),
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                ec.intl.string(ea.default.FzMGWR),
                                            ],
                                        }),
                                    ],
                                }),
                            !l &&
                                !g &&
                                A &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(tB, {}), ec.intl.string(ea.default["n9/rUq"])],
                                }),
                            g
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(tB, {}),
                                          (0, i.jsx)("span", {
                                              children: o.find((e) => {
                                                  let { id: t } = e;
                                                  return c === t;
                                              })?.name,
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tW = s(451988);
let tz = [d.fS.CAMERA],
    tq = [d.fS.SCREEN, d.fS.WINDOW, d.fS.CAMERA];
var tX = s(456713);
function t$(e) {
    let { onClose: t, transitionState: s, sourcePID: r, analyticsLocations: a = [], selectSource: D = !0 } = e,
        P = (0, u.bG)([_.Ay], () => (null != r ? (_.Ay.getGameForPID(r) ?? void 0) : void 0)),
        F = l.useRef(performance.now()),
        k = (0, u.bG)(
            [N.Ay],
            () =>
                (N.Ay.getUseSystemScreensharePicker() || N.Ay.getUseGamescopeCapture()) &&
                ((0, M.isLinux)() || ((0, M.isMac)() && c().satisfies(A.A?.os.release, eB.WZ))),
        ),
        { analyticsLocations: Z } = (0, E.Ay)(a, y.A.GO_LIVE_MODAL_V2),
        H = (0, u.bG)([O.default], () => O.default.getCurrentUser()),
        { state: B, dispatch: V } = (function (e, t, s) {
            let { defaultAutoQuality: i, allowAutoQuality: r } = (0, ew.X5)({ location: "useCreateGoLiveModalState" }),
                { preset: n, resolution: a, fps: c, soundshareEnabled: o } = (0, u.cf)([e_.A], () => e_.A.getState());
            i && (n = eI.jQ.PRESET_AUTO);
            let d = (0, u.bG)([N.Ay], () => N.Ay.getInputDeviceId()),
                f = w.uh.useSetting() ?? !1,
                h = w.wv.useSetting() ?? !1;
            (n in eI.jQ && (n !== eI.jQ.PRESET_AUTO || r)) || (n = eI.jQ.PRESET_VIDEO),
                (0, eN.A)(eI.jQ.PRESET_CUSTOM, a, c, t, s) || ((a = eI.on.RESOLUTION_720), (c = eI.kn.FPS_30));
            let [x, p] = l.useReducer(eL, {
                ...eR,
                muteStreamAudio: !o,
                preset: n,
                resolution: a,
                fps: c,
                hidePreview: f,
                notifyFriends: h,
                selectedSource: e,
                nativeSourceType: N.Ay.getUseGamescopeCapture() ? "gamescope" : "",
                audioSourceId: d,
            });
            return (
                l.useEffect(() => {
                    eE.A.hasPermission(eO.iL.SCREEN_RECORDING, { showAuthorizationError: !1 }).then((e) =>
                        p({ type: "set_has_permission", value: e }),
                    ),
                        A.A.window.getMediaSourceId?.().then((e) => {
                            p({ type: "set_discord_source_id", sourceId: e ?? "" });
                        });
                }, []),
                { state: x, dispatch: p }
            );
        })(P, H, tc()),
        Q = (0, S.A)((0, M.isWindows)() && null != P && D ? "confirm" : "source_select");
    !(function (e, t) {
        let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = (0, u.bG)([_.Ay], () => _.Ay.getRunningGames().length > 0),
            r = l.useRef(0),
            n = i ? 2e3 : 1e3,
            a = l.useRef(new tW.Ep());
        l.useEffect(() => {
            if (s) return;
            let i = a.current,
                l = r.current,
                c = { width: 447, height: 251, types: e ? tz : tq };
            async function o() {
                let { screenSources: e, windowSources: s, cameraSources: a } = await eS(c);
                r.current > l ||
                    (t({ type: "set_source_candidates", screenSources: e, windowSources: s, deviceSources: a }),
                    i.start(n, o));
            }
            return (
                o(),
                () => {
                    (r.current += 1), i.stop();
                }
            );
        }, [t, n, e, s]);
    })(k, V, "confirm" === Q);
    let W = !T.Ay.canStreamQuality(T.Ay.StreamQuality.HIGH, H),
        z = !(0, M.isLinux)(),
        q = "confirm" === Q,
        X = !D && null != P && !q,
        $ = q || B.sourceType === d.fS.CAMERA,
        Y = k && B.sourceType !== d.fS.CAMERA,
        J = l.useMemo(() => {
            let e = [
                { name: ec.intl.string(ec.t.tHoi7u), value: d.fS.WINDOW, icon: h.W },
                { name: ec.intl.string(ec.t.MhJ43A), value: d.fS.CAMERA, icon: x.n },
            ];
            return k || e.splice(1, 0, { name: ec.intl.string(ec.t.slM8rG), value: d.fS.SCREEN, icon: p.k }), e;
        }, [k]),
        { sourceType: K } = B,
        ee = l.useCallback(
            async (e) => {
                w.wv.updateSetting(B.notifyFriends), w.uh.updateSetting(B.hidePreview);
                let [s, i] = await (0, b.A)(e.hasOwnProperty("pid") ? e.pid : e, {
                    preset: B.preset,
                    fps: B.fps,
                    resolution: B.resolution,
                    soundshareEnabled: !B.muteStreamAudio,
                    previewDisabled: B.hidePreview,
                    goLiveModalDurationMs: performance.now() - F.current,
                    audioSourceId: B.audioSourceId,
                    analyticsLocations: Z,
                });
                if (s) return t();
                "no permission" === i &&
                    v.A.show({ title: ec.intl.string(ec.t["X+mXeq"]), body: ec.intl.string(ec.t.MIJCzr) }),
                    t();
            },
            [t, B, Z],
        );
    async function et(e) {
        (await (0, C.A)({ channelId: e })) && null != P && ee(P);
    }
    let es = l.useCallback(() => {
        ee({
            id: ("gamescope" === B.nativeSourceType ? "screen:" : "prepicked:") + B.nativeSourceType,
            name: U.Ay.getLastPickedContentTitle() ?? ec.intl.string(ec.t.KKcy95),
            url: "",
        });
    }, [ee, B.nativeSourceType]);
    return (0, i.jsx)(eU, {
        state: B,
        dispatch: V,
        children: (0, i.jsx)(m.d, {
            transitionState: s,
            onClose: t,
            size: "xl",
            trackingProps: {
                impression: {
                    impressionName: o.ImpressionNames.GO_LIVE_MODAL,
                    impressionProperties: {
                        location_stack: Z,
                        application_id: (0, M.isWindows)() ? (0, G.A)(_.Ay, R.A)?.id : void 0,
                        parent_media_session_id: I.A.getMediaSessionId(),
                    },
                },
            },
            children: (0, i.jsxs)("div", {
                className: n()(tX.zr, { [tX._g]: k && null == P, [tX.Tb]: X, [tX.Fe]: q }),
                children: [
                    X
                        ? (0, i.jsx)(eu, { className: n()(tX.or, tX.Ym), onSelectChannel: et })
                        : q
                          ? (0, i.jsx)(eD, {})
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: tX.wx,
                                        children: (0, i.jsx)(j.I, {
                                            className: tX.q0,
                                            value: K,
                                            look: "pill",
                                            optionClassName: tX.LD,
                                            onChange: (e) => {
                                                let { value: t } = e;
                                                return V({ type: "set_source_type", sourceType: t });
                                            },
                                            options: J,
                                        }),
                                    }),
                                    (0, i.jsx)(f.Ar, {
                                        className: tX.Qs,
                                        children:
                                            k && K !== d.fS.CAMERA
                                                ? (0, i.jsx)(ez, { onSourceSelect: es })
                                                : (0, i.jsx)(e3, {
                                                      onClick: function (e) {
                                                          e.id?.startsWith(d.fS.CAMERA)
                                                              ? V({ type: "set_selected_source", source: e })
                                                              : ee(e);
                                                      },
                                                  }),
                                    }),
                                ],
                            }),
                    (0, i.jsxs)("div", {
                        className: tX.qr,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tX.z8,
                                children: [
                                    (0, i.jsx)(tQ, {}),
                                    (0, i.jsxs)("div", {
                                        className: tX.gt,
                                        children: [
                                            W && (0, i.jsx)(tC, { onClose: t }),
                                            (Y || $) &&
                                                (0, i.jsx)(g.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: ec.intl.string(
                                                        Y && "gamescope" !== B.nativeSourceType
                                                            ? ec.t.FiBjwU
                                                            : ea.default["5AyH/p"],
                                                    ),
                                                    onClick: () => {
                                                        Y
                                                            ? "gamescope" === B.nativeSourceType
                                                                ? es()
                                                                : ((0, L.E)(), (0, L.a)(B.nativeSourceType))
                                                            : null != B.selectedChannel
                                                              ? et(B.selectedChannel)
                                                              : null != B.selectedSource && ee(B.selectedSource);
                                                    },
                                                    disabled:
                                                        (Y && !z && "" === B.nativeSourceType) ||
                                                        ($ && null == B.selectedSource),
                                                }),
                                            (0, i.jsx)(tS, { align: "right" }),
                                        ],
                                    }),
                                ],
                            }),
                            W && (0, i.jsx)("div", { className: tX.rO, children: (0, i.jsx)(tU, { onClose: t }) }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
