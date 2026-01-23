n.d(t, {
    Ii: () => b,
    Ut: () => y,
    u0: () => E,
});
var r = n(64700),
    i = n(835245),
    a = n(345353),
    s = n(69114),
    o = n(723702),
    l = n(859703),
    c = n(710969),
    u = n(561844),
    d = n(590202),
    f = n(971649),
    p = n(652215);

function _(e, t, n) {
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

function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function E() {
    let e = (0, f.vU)();
    return r.useCallback(
        (t) => {
            (0, u.av)(
                g(h({}, t), {
                    properties: g(h({}, t.properties), {
                        impression_id: null == e ? void 0 : e.getId(),
                    }),
                }),
            );
        },
        [e],
    );
}

function y() {
    let e = E();
    return r.useCallback(
        (t) => {
            let {
                    questId: n,
                    questContent: r,
                    questContentCTA: u,
                    questContentPosition: f,
                    questContentRowIndex: _,
                    trackGuildAndChannelMetadata: m,
                    sourceQuestContent: E,
                } = t,
                y = l.A.getQuest(n),
                b = (0, c.Li)(r),
                O = (0, c.L4)(r),
                v = (0, c.yI)(r, n),
                A = (0, c.Gp)(r, n);
            (0, a.N)((0, d.jO)(r)).then((t) => {
                e({
                    questId: n,
                    event: p.HAw.QUEST_CONTENT_CLICKED,
                    properties: g(h({}, (0, d.fF)(r, f, _), (0, s.A)()), {
                        cta_name: u,
                        quest_status: null != y ? (0, d.NI)(y) : null,
                        click_id: (0, i.A)(),
                        apple_advertising_id: null != t && (0, o.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, o.isAndroid)() ? t.advertisingId : null,
                        metadata_raw: null != b ? b : null,
                        metadata_sealed: null != O ? O : null,
                        traffic_metadata_raw: null != v ? v : null,
                        traffic_metadata_sealed: null != A ? A : null,
                    }),
                    trackGuildAndChannelMetadata: m,
                    shouldExtendSession: (0, c.xn)(r),
                    sourceQuestContent: E,
                });
            });
        },
        [e],
    );
}

function b(e, t) {
    r.useEffect(() => {
        (0, u.DZ)(t, e);
    }, [e, t]);
}
