n.d(t, { A: () => r });
var i = n(388032);
function r(e) {
    switch (e.length) {
        case 0:
            return;
        case 1:
            return e[0].name;
        case 2:
            return i.intl.formatToPlainString(i.t['G/lpQU'], {
                item1: e[0].name,
                item2: e[1].name
            });
        default:
            let t = e
                    .slice(0, -1)
                    .map((e) => {
                        let { name: t } = e;
                        return t;
                    })
                    .join(', '),
                n = e[e.length - 1];
            return i.intl.formatToPlainString(i.t.PIMwen, {
                items: t,
                last: n.name
            });
    }
}
