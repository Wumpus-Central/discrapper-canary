n.d(t, { Z: () => o });
var i = n(314897),
    a = n(981631);
function o(e) {
    if (a.TPd.CALLABLE.has(e.type)) {
        var t;
        return (null === (t = e.recipients) || void 0 === t ? void 0 : t.length) === 1 ? e.recipients[0] : null;
    }
    return i.default.getId();
}
