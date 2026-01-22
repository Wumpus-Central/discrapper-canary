n.d(t, {
    $B: () => P,
    Ag: () => L,
    Cx: () => G,
    EF: () => z,
    Ii: () => U,
    K4: () => B,
    ME: () => H,
    MJ: () => V,
    N3: () => w,
    NO: () => M,
    Pp: () => q,
    V1: () => X,
    X2: () => F,
    b7: () => j,
    fl: () => k,
    hX: () => K,
    kF: () => W,
    lq: () => D,
    sw: () => Y,
    u8: () => x,
}),
    n(228524),
    n(938796),
    n(747238),
    n(812715),
    n(866193),
    n(321073),
    n(896048);
var r = n(487899),
    i = n(665260),
    a = n(157559),
    s = n(843472),
    o = n(155718),
    l = n(847381),
    c = n(264322),
    u = n(392054),
    d = n(168186),
    f = n(545152),
    p = n(204776),
    _ = n(451909),
    h = n(611010),
    m = n(486020),
    g = n(723702),
    E = n(989837),
    b = n(500049),
    y = n(652215),
    O = n(73510),
    A = n(381941),
    v = n(985018);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = R(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let w = { id: O.Ik.BUILT_IN };
function P(e) {
    return e.id !== O.Ik.BUILT_IN;
}
function D(e) {
    return P(e) ? e.name : v.intl.string(v.t.UB2gG2);
}
function x(e) {
    return P(e) ? e.description : v.intl.string(v.t.X9fusn);
}
function L(e) {
    var t;
    return P(e) && (0, i.Lt)(null != (t = e.flags) ? t : 0, y.gfo.EMBEDDED);
}
function j(e) {
    var t;
    return P(e) && (0, i.Lt)(null != (t = e.flags) ? t : 0, y.gfo.PARTNER);
}
function M(e) {
    var t;
    return P(e) && (0, i.Lt)(null != (t = e.flags) ? t : 0, y.gfo.PROMOTED);
}
function k(e) {
    let t = G(e),
        n = null == t ? void 0 : t.client_platform_config[(0, l.A)((0, g.getOS)())],
        r = Date.now();
    if (
        (null == n ? void 0 : n.label_until) != null &&
        r < Date.parse(n.label_until) &&
        (null == n ? void 0 : n.label_from) != null &&
        r > Date.parse(n.label_from)
    ) {
        var i;
        return null != (i = null == n ? void 0 : n.label_type) ? i : o.Hr.NONE;
    }
    return o.Hr.NONE;
}
function U(e) {
    switch (k(e)) {
        case o.Hr.NEW:
            return "New";
        case o.Hr.UPDATED:
            return "Updated";
        default:
            return "";
    }
}
function G(e) {
    return P(e) && L(e) ? (e instanceof h.Ay ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function V(e) {
    let {
            command: t,
            optionValues: n,
            context: r,
            commandTargetId: i,
            maxSizeCallback: o,
            sectionName: l,
            commandOrigin: c = u.iw.APPLICATION_LAUNCHER,
        } = e,
        { channel: d } = r,
        p = async () => {
            try {
                let a = await (0, f.A)({
                    command: t,
                    optionValues: n,
                    context: r,
                    commandTargetId: i,
                    maxSizeCallback: o,
                    commandOrigin: c,
                    sectionName: l,
                    source: E.A.entrypoint(),
                });
                if (t.inputType === u.y$.BUILT_IN_TEXT && null != a && null != r.channel) {
                    var e;
                    let t = _.Ay.parse(d, a.content);
                    (t.tts = null != (e = a.tts) && e),
                        s.A.sendMessage(r.channel.id, t, !0, { location: A.Hx.APP_COMMAND });
                }
            } catch (e) {
                throw (
                    (a.A.show({
                        title: v.intl.string(v.t["aHO//m"]),
                        body: v.intl.string(v.t.kuzKHK),
                        confirmText: v.intl.string(v.t["5911Lb"]),
                        onConfirm: () => p(),
                    }),
                    e)
                );
            }
        };
    return p();
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n } = t,
        r = N(t, ["fakeAppIconURL"]);
    return P(e)
        ? {
              iconURL: m.Ay.getApplicationIconURL(
                  C(I({}, r), {
                      id: e.id,
                      icon: e.icon,
                  }),
              ),
              name: e.name,
              description: e.description,
          }
        : {
              iconURL: null != n ? n : null,
              name: v.intl.string(v.t.UB2gG2),
              description: v.intl.string(v.t.X9fusn),
          };
}
function B(e) {
    return !!P(e) && (e instanceof h.Ay ? e.isMonetized : e.is_monetized);
}
function H(e) {
    let t = G(e);
    return null != t && t.displays_advertisements;
}
function Y(e) {
    return e === b.s4.TEXT;
}
function W(e) {
    return null == e ? "" : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll("_", " ");
}
function K(e) {
    let t = [];
    for (let n of e) {
        let e = n.application_directory_collection_items.filter((e) => e.type === r.L.APPLICATION && L(e.application));
        0 !== e.length && t.push(C(I({}, n), { application_directory_collection_items: e }));
    }
    return t;
}
function z(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig,
    };
}
function q(e) {
    return e instanceof h.Ay
        ? {
              applicationId: e.id,
              customInstallUrl: e.customInstallUrl,
              installParams: e.installParams,
              integrationTypesConfig: e.integrationTypesConfig,
          }
        : {
              applicationId: e.id,
              customInstallUrl: e.custom_install_url,
              installParams: e.install_params,
              integrationTypesConfig: e.integration_types_config,
          };
}
function X(e, t) {
    let n = null != t ? c.Ay.getGuildState(t) : null,
        r = null != n && (0, d.gI)(e.id, n);
    return (0, p.Kp)(e) || r;
}
