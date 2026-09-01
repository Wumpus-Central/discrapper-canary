var n =
    (this && this.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.includeCommonConfiguration = function (e, t = !1) {
        return (
            e.parsers.unshift(new l.default()),
            e.refiners.unshift(new d.default()),
            e.refiners.unshift(new i.default()),
            e.refiners.unshift(new s.default()),
            e.refiners.push(new a.default()),
            e.refiners.push(new s.default()),
            e.refiners.push(new o.default()),
            e.refiners.push(new u.default(t)),
            e
        );
    });
let a = n(r(833418)),
    i = n(r(888234)),
    s = n(r(913912)),
    o = n(r(535550)),
    u = n(r(939214)),
    l = n(r(886217)),
    d = n(r(6310));
