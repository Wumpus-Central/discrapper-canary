"use strict";
n.d(t, { C: () => s });
var r = n(960731),
    i = n(428420);
function s(e) {
    let t = {};
    for (let n of (Object.defineProperty(t, i.$, { enumerable: !1, value: e }), e.fields)) {
        let e = n.localName;
        if (!n.opt)
            if (n.oneof) t[n.oneof] = { oneofKind: void 0 };
            else if (n.repeat) t[e] = [];
            else
                switch (n.kind) {
                    case "scalar":
                        t[e] = (0, r.V)(n.T, n.L);
                        break;
                    case "enum":
                        t[e] = 0;
                        break;
                    case "map":
                        t[e] = {};
                }
    }
    return t;
}
