"use strict";
n.d(t, { n: () => c });
var i = n(477900),
    r = n(582128),
    a = n(14877),
    s = n(15626),
    l = n(140735),
    o = n(460890),
    d = n(834730);
function c(e) {
    let { value: t, maxLength: n } = e,
        { i18n: c } = (0, o.G9)(),
        u = r.useContext(s._),
        _ = t?.length ?? 0;
    return (
        (0, a.$)({ currentLength: _, maxLength: n, message: c.CHARACTER_COUNT_LIMIT_REACHED }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(d.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    tabularNumbers: !0,
                    "aria-hidden": null != n,
                    children: [_, null != n && ` / ${n}`],
                }),
                null != n &&
                    (0, i.jsx)(l.A, {
                        id: u?.trailingAuxiliaryContentId,
                        children: c.CHARACTER_COUNT_A11Y_LABEL(n - _),
                    }),
            ],
        })
    );
}
