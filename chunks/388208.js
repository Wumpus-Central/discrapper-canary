(n.d(t, {
    Bl: () => i,
    Bp: () => c,
    I6: () => m,
    In: () => s,
    NE: () => d,
    _F: () => f,
    hU: () => h,
    iZ: () => r,
    rL: () => u,
    v8: () => o,
}),
    n(321073),
    n(870440));
var l = n(248675),
    a = n(375708);
function i(e, t) {
    return !t.some((t) => t.id === e);
}
function r(e, t) {
    let n = Array.from({ length: Math.max(1, e.length) }, (e, t) => ({ kind: "question", index: t }));
    return t ? ["about", "server", ...n] : ["about", ...n];
}
function s(e, t) {
    return null != e && (!0 === e.optional || "" !== (t ?? "").trim());
}
function o(e) {
    return a.intl.formatToPlainString(l.default["4lZNuo"], { templateName: e, locale: a.intl.currentLocale });
}
function u(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role && null != n.intake) return n.intake;
    }
    return null;
}
function d(e) {
    return null == e
        ? null
        : {
              lead: e.intro.lead,
              points: e.intro.points.map((e) => ({
                  title: e.title,
                  ...(null != e.subtext ? { subtext: e.subtext } : {}),
                  icon: e.icon ?? "shield",
              })),
          };
}
function c(e) {
    return e?.server ?? { title: a.intl.string(l.default.WQCnSf), hint: a.intl.string(l.default.KLTQfQ) };
}
function m(e) {
    return e?.questions ?? [];
}
function f(e, t) {
    return e.length > 0 && e.every((e, n) => !0 === e.optional || "" !== (t[n] ?? "").trim());
}
function h(e, t) {
    let n = [];
    return (
        e.forEach((e, l) => {
            let a = (t[l] ?? "").trim();
            ("" !== a || !0 !== e.optional) &&
                (a.includes("\n")
                    ? n.push(`${l + 1}. ${e.title} \u{2192}`, '"""', a, '"""')
                    : n.push(`${l + 1}. ${e.title} \u{2192} ${a}`));
        }),
        n.join("\n")
    );
}
