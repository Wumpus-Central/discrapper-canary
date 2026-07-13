"use strict";
n.d(t, { D: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(460890);
let d = new Map([
    [
        "mana-type-consolidation",
        {
            text: new Map([
                ["heading-sm/normal", "experimental/heading-xs/semibold"],
                ["heading-sm/medium", "experimental/heading-xs/semibold"],
                ["heading-sm/semibold", "experimental/heading-xs/semibold"],
                ["heading-sm/bold", "experimental/heading-xs/bold"],
                ["heading-sm/extrabold", "experimental/heading-xs/bold"],
                ["heading-md/normal", "experimental/heading-sm/semibold"],
                ["heading-md/medium", "experimental/heading-sm/semibold"],
                ["heading-md/semibold", "experimental/heading-sm/semibold"],
                ["heading-md/bold", "experimental/heading-md/bold"],
                ["heading-md/extrabold", "experimental/heading-md/bold"],
                ["heading-lg/normal", "experimental/heading-lg/semibold"],
                ["heading-lg/medium", "experimental/heading-lg/semibold"],
                ["heading-lg/semibold", "experimental/heading-lg/semibold"],
                ["heading-lg/bold", "experimental/heading-lg/bold"],
                ["heading-lg/extrabold", "experimental/heading-lg/bold"],
                ["heading-xl/normal", "experimental/heading-xl/semibold"],
                ["heading-xl/medium", "experimental/heading-xl/semibold"],
                ["heading-xl/semibold", "experimental/heading-xl/semibold"],
                ["heading-xl/bold", "experimental/heading-xl/bold"],
                ["heading-xl/extrabold", "experimental/heading-xl/bold"],
                ["heading-xxl/normal", "experimental/heading-xxl/semibold"],
                ["heading-xxl/medium", "experimental/heading-xxl/semibold"],
                ["heading-xxl/semibold", "experimental/heading-xxl/semibold"],
                ["heading-xxl/bold", "experimental/heading-xxl/bold"],
                ["heading-xxl/extrabold", "experimental/heading-xxl/bold"],
                ["eyebrow", "experimental/label-xs/semibold"],
                ["heading-deprecated-12/normal", "experimental/body-xs/normal"],
                ["heading-deprecated-12/medium", "experimental/body-xs/medium"],
                ["heading-deprecated-12/semibold", "experimental/label-xs/semibold"],
                ["heading-deprecated-12/bold", "experimental/label-xs/semibold"],
                ["heading-deprecated-12/extrabold", "experimental/label-xs/semibold"],
                ["redesign/heading-18/medium", "experimental/heading-md/semibold"],
                ["redesign/heading-18/semibold", "experimental/heading-md/semibold"],
                ["redesign/heading-18/bold", "experimental/heading-md/bold"],
                ["text-xxs/normal", "experimental/meta/normal"],
                ["text-xxs/medium", "experimental/meta/normal"],
                ["text-xxs/semibold", "experimental/meta/medium"],
                ["text-xxs/bold", "experimental/meta/medium"],
                ["text-xs/normal", "experimental/body-xs/normal"],
                ["text-xs/medium", "experimental/body-xs/medium"],
                ["text-xs/semibold", "experimental/label-xs/semibold"],
                ["text-xs/bold", "experimental/label-xs/semibold"],
                ["text-sm/normal", "experimental/body-sm/normal"],
                ["text-sm/medium", "experimental/body-sm/medium"],
                ["text-sm/semibold", "experimental/label-sm/semibold"],
                ["text-sm/bold", "experimental/label-sm/semibold"],
                ["text-md/normal", "experimental/body-md/normal"],
                ["text-md/medium", "experimental/body-md/medium"],
                ["text-md/semibold", "experimental/label-md/semibold"],
                ["text-md/bold", "experimental/label-md/semibold"],
                ["text-lg/normal", "experimental/body-lg/normal"],
                ["text-lg/medium", "experimental/body-lg/medium"],
                ["text-lg/semibold", "experimental/heading-lg/semibold"],
                ["text-lg/bold", "experimental/heading-lg/bold"],
                ["redesign/message-preview/normal", "experimental/heading-sm/semibold"],
                ["redesign/message-preview/medium", "experimental/heading-sm/semibold"],
                ["redesign/message-preview/semibold", "experimental/heading-sm/semibold"],
                ["redesign/message-preview/bold", "experimental/heading-sm/bold"],
                ["redesign/channel-title/normal", "experimental/heading-sm/semibold"],
                ["redesign/channel-title/medium", "experimental/heading-sm/semibold"],
                ["redesign/channel-title/semibold", "experimental/heading-sm/semibold"],
                ["redesign/channel-title/bold", "experimental/heading-sm/bold"],
                ["display-sm", "experimental/display-sm"],
                ["display-md", "experimental/display-md"],
                ["display-lg", "experimental/display-lg"],
                ["code", "experimental/mono-md/bold"],
            ]),
            heading: new Map([
                ["text-sm/semibold", "experimental/heading-xs/semibold"],
                ["text-sm/bold", "experimental/heading-xs/bold"],
                ["text-md/semibold", "experimental/heading-sm/semibold"],
                ["text-md/bold", "experimental/heading-sm/bold"],
            ]),
        },
    ],
]);
var c = n(707554),
    u = n(893941);
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
