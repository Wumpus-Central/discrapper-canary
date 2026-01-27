n.d(t, {
    A: () => r,
});

function r(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        {
            width: l,
            height: a,
            offsetX: i,
            offsetY: s,
        } = (function (e, t, n) {
            let r = e.videoWidth / e.videoHeight,
                l = t.width - 2 * n,
                a = t.height - 2 * n;
            if (r > l / a) {
                let e = a * r;
                return {
                    offsetX: n + (l - e) / 2,
                    offsetY: n,
                    height: a,
                    width: e,
                };
            }
            {
                let e = l / r;
                return {
                    offsetX: n,
                    offsetY: n + (a - e) / 2,
                    width: l,
                    height: e,
                };
            }
        })(e, t, r);
    n.drawImage(e, i, s, l, a);
}
