"use strict";
n.d(t, {
    $B: () => C,
    Ag: () => R,
    Cx: () => x,
    EF: () => B,
    Ii: () => w,
    K4: () => k,
    ME: () => U,
    MJ: () => P,
    N3: () => v,
    NO: () => D,
    Pp: () => j,
    V1: () => H,
    X2: () => M,
    b7: () => O,
    fl: () => L,
    hX: () => F,
    kF: () => V,
    lq: () => b,
    sw: () => G,
    u8: () => N,
}),
    n(938796),
    n(321073);
var r = n(487899),
    i = n(665260),
    a = n(157559),
    s = n(843472),
    o = n(155718),
    l = n(847381),
    u = n(264322),
    c = n(392054),
    d = n(168186),
    _ = n(545152),
    f = n(204776),
    p = n(451909),
    h = n(611010),
    m = n(486020),
    g = n(723702),
    E = n(989837),
    A = n(500049),
    I = n(652215),
    T = n(73510),
    y = n(381941),
    S = n(985018);
let v = { id: T.Ik.BUILT_IN };
function C(e) {
    return e.id !== T.Ik.BUILT_IN;
}
function b(e) {
    return C(e) ? e.name : S.intl.string(S.t.UB2gG2);
}
function N(e) {
    return C(e) ? e.description : S.intl.string(S.t.X9fusn);
}
function R(e) {
    return C(e) && (0, i.Lt)(e.flags ?? 0, I.gfo.EMBEDDED);
}
function O(e) {
    return C(e) && (0, i.Lt)(e.flags ?? 0, I.gfo.PARTNER);
}
function D(e) {
    return C(e) && (0, i.Lt)(e.flags ?? 0, I.gfo.PROMOTED);
}
function L(e) {
    let t = x(e),
        n = t?.client_platform_config[(0, l.A)((0, g.getOS)())],
        r = Date.now();
    return n?.label_until != null &&
        r < Date.parse(n.label_until) &&
        n?.label_from != null &&
        r > Date.parse(n.label_from)
        ? (n?.label_type ?? o.Hr.NONE)
        : o.Hr.NONE;
}
function w(e) {
    switch (L(e)) {
        case o.Hr.NEW:
            return "New";
        case o.Hr.UPDATED:
            return "Updated";
        default:
            return "";
    }
}
function x(e) {
    return C(e) && R(e) ? (e instanceof h.Ay ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function P(e) {
    let {
            command: t,
            optionValues: n,
            context: r,
            commandTargetId: i,
            maxSizeCallback: o,
            sectionName: l,
            commandOrigin: u = c.iw.APPLICATION_LAUNCHER,
        } = e,
        { channel: d } = r,
        f = async () => {
            try {
                let e = await (0, _.A)({
                    command: t,
                    optionValues: n,
                    context: r,
                    commandTargetId: i,
                    maxSizeCallback: o,
                    commandOrigin: u,
                    sectionName: l,
                    source: E.A.entrypoint(),
                });
                if (t.inputType === c.y$.BUILT_IN_TEXT && null != e && null != r.channel) {
                    let t = p.Ay.parse(d, e.content);
                    (t.tts = e.tts ?? !1), s.A.sendMessage(r.channel.id, t, !0, { location: y.Hx.APP_COMMAND });
                }
            } catch (e) {
                throw (
                    (a.A.show({
                        title: S.intl.string(S.t["aHO//m"]),
                        body: S.intl.string(S.t.kuzKHK),
                        confirmText: S.intl.string(S.t["5911Lb"]),
                        onConfirm: () => f(),
                    }),
                    e)
                );
            }
        };
    return f();
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n, ...r } = t;
    return C(e)
        ? {
              iconURL: m.Ay.getApplicationIconURL({ ...r, id: e.id, icon: e.icon }),
              name: e.name,
              description: e.description,
          }
        : { iconURL: n ?? null, name: S.intl.string(S.t.UB2gG2), description: S.intl.string(S.t.X9fusn) };
}
function k(e) {
    return !!C(e) && (e instanceof h.Ay ? e.isMonetized : e.is_monetized);
}
function U(e) {
    let t = x(e);
    return null != t && t.displays_advertisements;
}
function G(e) {
    return e === A.s4.TEXT;
}
function V(e) {
    return null == e ? "" : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll("_", " ");
}
function F(e) {
    let t = [];
    for (let n of e) {
        let e = n.application_directory_collection_items.filter((e) => e.type === r.L.APPLICATION && R(e.application));
        0 !== e.length && t.push({ ...n, application_directory_collection_items: e });
    }
    return t;
}
function B(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig,
    };
}
function j(e) {
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
function H(e, t) {
    let n = null != t ? u.Ay.getGuildState(t) : null,
        r = null != n && (0, d.gI)(e.id, n);
    return (0, f.Kp)(e) || r;
}
