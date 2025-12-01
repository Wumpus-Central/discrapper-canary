n.d(t, { Z: () => f });
var r = n(473749),
    i = n(806966),
    a = n(697426),
    o = n(294206),
    s = n(280880);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let {
            descriptor: t,
            soundButtonProps: n,
            rowIndex: l,
            columnIndex: u,
            isUsingKeyboardNavigation: f,
            suppressPlaySound: p,
            getItemProps: _,
            onSelectItem: m,
            onItemMouseEnter: h,
            buttonOverlay: g,
            isNitroLocked: E,
            shouldShowUpsell: b,
            inExpressionPicker: y,
        } = e,
        O = i.Wq.useStore((e) => e.inspectedExpressionPosition),
        v = "".concat(l, "-").concat(u),
        S = f && O.rowIndex === l && O.columnIndex === u;
    switch (t.item.type) {
        case a.vB.SOUND:
            return (0, r.createElement)(
                o.ZP,
                d(c({}, _(u), n), {
                    key: v,
                    sound: t.item.sound,
                    suppressPlaySound: p,
                    focused: S,
                    onMouseEnter: () => h(u),
                    onSelectItem: (e) => m(t, e),
                    enableSecondaryActions: !0,
                    buttonOverlay: g,
                    inNitroLockedSection: E,
                    showLockForDisabledSound: b,
                    isSoundmoji: !0 === y,
                }),
            );
        case a.vB.ADD_SOUND:
            return (0, r.createElement)(
                s.Z,
                d(c({}, _(u)), {
                    key: v,
                    guild: t.item.guild,
                    focused: S,
                    onSelectItem: () => m(t),
                }),
            );
    }
}
