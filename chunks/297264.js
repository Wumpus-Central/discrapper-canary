"use strict";
n.d(t, { D: () => _ });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(460890);
let d = new Map([
    [
        "mana-type-consolidation",
        {
            text: new Map([
                ["heading-sm/normal", "experimental/heading-xs/medium"],
                ["heading-sm/medium", "experimental/heading-xs/medium"],
                ["heading-sm/semibold", "experimental/heading-xs/semibold"],
                ["heading-sm/bold", "experimental/heading-xs/semibold"],
                ["heading-sm/extrabold", "experimental/heading-xs/semibold"],
                ["heading-md/normal", "experimental/heading-sm/medium"],
                ["heading-md/medium", "experimental/heading-sm/medium"],
                ["heading-md/semibold", "experimental/heading-sm/semibold"],
                ["heading-md/bold", "experimental/heading-sm/semibold"],
                ["heading-md/extrabold", "experimental/heading-sm/semibold"],
                ["heading-lg/normal", "experimental/heading-lg/medium"],
                ["heading-lg/medium", "experimental/heading-lg/medium"],
                ["heading-lg/semibold", "experimental/heading-lg/semibold"],
                ["heading-lg/bold", "experimental/heading-lg/semibold"],
                ["heading-lg/extrabold", "experimental/heading-lg/semibold"],
                ["heading-xl/normal", "experimental/heading-xl/medium"],
                ["heading-xl/medium", "experimental/heading-xl/medium"],
                ["heading-xl/semibold", "experimental/heading-xl/semibold"],
                ["heading-xl/bold", "experimental/heading-xl/semibold"],
                ["heading-xl/extrabold", "experimental/heading-xl/semibold"],
                ["heading-xxl/normal", "experimental/heading-xxl/medium"],
                ["heading-xxl/medium", "experimental/heading-xxl/medium"],
                ["heading-xxl/semibold", "experimental/heading-xxl/semibold"],
                ["heading-xxl/bold", "experimental/heading-xxl/semibold"],
                ["heading-xxl/extrabold", "experimental/heading-xxl/semibold"],
                ["eyebrow", "experimental/body-xs/semibold"],
                ["heading-deprecated-12/normal", "experimental/body-xs/normal"],
                ["heading-deprecated-12/medium", "experimental/body-xs/medium"],
                ["heading-deprecated-12/semibold", "experimental/body-xs/semibold"],
                ["heading-deprecated-12/bold", "experimental/body-xs/semibold"],
                ["heading-deprecated-12/extrabold", "experimental/body-xs/semibold"],
                ["redesign/heading-18/medium", "experimental/heading-md/medium"],
                ["redesign/heading-18/semibold", "experimental/heading-md/semibold"],
                ["redesign/heading-18/bold", "experimental/heading-md/semibold"],
                ["text-xxs/normal", "experimental/footnote/normal"],
                ["text-xxs/medium", "experimental/footnote/medium"],
                ["text-xxs/semibold", "experimental/footnote/semibold"],
                ["text-xxs/bold", "experimental/footnote/semibold"],
                ["text-xs/normal", "experimental/body-xs/normal"],
                ["text-xs/medium", "experimental/body-xs/medium"],
                ["text-xs/semibold", "experimental/body-xs/semibold"],
                ["text-xs/bold", "experimental/body-xs/semibold"],
                ["text-sm/normal", "experimental/body-sm/normal"],
                ["text-sm/medium", "experimental/body-sm/medium"],
                ["text-sm/semibold", "experimental/body-sm/semibold"],
                ["text-sm/bold", "experimental/body-sm/semibold"],
                ["text-md/normal", "experimental/body-md/normal"],
                ["text-md/medium", "experimental/body-md/medium"],
                ["text-md/semibold", "experimental/body-md/semibold"],
                ["text-md/bold", "experimental/body-md/semibold"],
                ["text-lg/normal", "experimental/body-lg/normal"],
                ["text-lg/medium", "experimental/body-lg/medium"],
                ["text-lg/semibold", "experimental/body-lg/semibold"],
                ["text-lg/bold", "experimental/body-lg/semibold"],
                ["redesign/message-preview/normal", "experimental/heading-sm/medium"],
                ["redesign/message-preview/medium", "experimental/heading-sm/medium"],
                ["redesign/message-preview/semibold", "experimental/heading-sm/semibold"],
                ["redesign/message-preview/bold", "experimental/heading-sm/semibold"],
                ["redesign/channel-title/normal", "experimental/heading-sm/medium"],
                ["redesign/channel-title/medium", "experimental/heading-sm/medium"],
                ["redesign/channel-title/semibold", "experimental/heading-sm/semibold"],
                ["redesign/channel-title/bold", "experimental/heading-sm/semibold"],
                ["display-sm", "experimental/display-sm"],
                ["display-md", "experimental/display-md"],
                ["display-lg", "experimental/display-lg"],
                ["code", "experimental/mono-md/bold"],
            ]),
            heading: new Map([]),
        },
    ],
]);
var c = n(707554),
    u = n(660557);
let _ = r.forwardRef(function (e, t) {
    let { variant: n, className: r, ...a } = e,
        _ = (0, c.$)(),
        E = `h${Math.min(_, 6)}`,
        A = (function (e, t) {
            var n = (0, o.G9)().experiments?.enabledExperiments ?? [];
            for (let [i, r] of d) {
                if (!n.includes(i)) continue;
                let a = (t ? r.heading.get(e) : void 0) ?? r.text.get(e);
                if (null != a) return a;
            }
            return e;
        })(n, !0);
    return (0, i.jsx)(l.E, {
        ref: t,
        variant: A,
        tag: E,
        className: s()(u.f, r),
        ...(_ > 6 ? { "data-excessive-heading-level": _ } : {}),
        ...a,
    });
});
