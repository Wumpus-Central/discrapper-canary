n.d(t, { Z: () => _ });
var r = n(192379),
    i = n(806966),
    o = n(697426),
    a = n(294206),
    s = n(51234),
    l = n(280880);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let { descriptor: t, soundButtonProps: n, rowIndex: c, columnIndex: d, isUsingKeyboardNavigation: _, suppressPlaySound: p, getItemProps: h, onSelectItem: m, onItemMouseEnter: g, buttonOverlay: E, isNitroLocked: b, shouldShowUpsell: y, refreshEnabled: v, inExpressionPicker: O } = e,
        I = i.Wq.useStore((e) => e.inspectedExpressionPosition),
        S = ''.concat(c, '-').concat(d),
        T = _ && I.rowIndex === c && I.columnIndex === d;
    switch (t.item.type) {
        case o.vB.SOUND:
            return (0, r.createElement)(
                a.ZP,
                f(u({}, h(d), n), {
                    key: S,
                    sound: t.item.sound,
                    suppressPlaySound: p,
                    focused: T,
                    onMouseEnter: () => g(d),
                    onSelectItem: (e) => m(t, e),
                    enableSecondaryActions: !0,
                    buttonOverlay: E,
                    inNitroLockedSection: b,
                    showLockForDisabledSound: y,
                    refreshEnabled: v,
                    isSoundmoji: !0 === O
                })
            );
        case o.vB.ADD_SOUND:
            return (0, r.createElement)(
                l.Z,
                f(u({}, h(d)), {
                    key: S,
                    guild: t.item.guild,
                    focused: T,
                    onSelectItem: () => m(t),
                    refreshEnabled: v
                })
            );
        case o.vB.SHOW_ALL:
            return (0, r.createElement)(
                s.Z,
                f(u({}, h(d)), {
                    key: S,
                    guild: t.item.guild,
                    focused: T
                })
            );
    }
}
