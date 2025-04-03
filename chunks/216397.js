r.d(t, { Z: () => c });
var a = r(760919),
    n = r(677524),
    s = r(413668);
let o = [, , ,].fill('<percentage> | <number>[0, 255]'),
    i = [, , ,].fill('<number>[0, 255]'),
    c = new a.Z({
        id: 'srgb',
        name: 'sRGB',
        base: n.Z,
        fromBase: (e) =>
            e.map((e) => {
                let t = e < 0 ? -1 : 1,
                    r = e * t;
                return r > 0.0031308 ? t * (1.055 * r ** (1 / 2.4) - 0.055) : 12.92 * e;
            }),
        toBase: (e) =>
            e.map((e) => {
                let t = e < 0 ? -1 : 1,
                    r = e * t;
                return r <= 0.04045 ? e / 12.92 : t * ((r + 0.055) / 1.055) ** 2.4;
            }),
        formats: {
            rgb: { coords: o },
            rgb_number: {
                name: 'rgb',
                commas: !0,
                coords: i,
                noAlpha: !0
            },
            color: {},
            rgba: {
                coords: o,
                commas: !0,
                lastAlpha: !0
            },
            rgba_number: {
                name: 'rgba',
                commas: !0,
                coords: i
            },
            hex: {
                type: 'custom',
                toGamut: !0,
                test: (e) => /^#([a-f0-9]{3,4}){1,2}$/i.test(e),
                parse(e) {
                    e.length <= 5 && (e = e.replace(/[a-f0-9]/gi, '$&$&'));
                    let t = [];
                    return (
                        e.replace(/[a-f0-9]{2}/gi, (e) => {
                            t.push(parseInt(e, 16) / 255);
                        }),
                        {
                            spaceId: 'srgb',
                            coords: t.slice(0, 3),
                            alpha: t.slice(3)[0]
                        }
                    );
                },
                serialize: (e, t, { collapse: r = !0 } = {}) => {
                    t < 1 && e.push(t), (e = e.map((e) => Math.round(255 * e)));
                    let a = r && e.every((e) => e % 17 == 0);
                    return '#' + e.map((e) => (a ? (e / 17).toString(16) : e.toString(16).padStart(2, '0'))).join('');
                }
            },
            keyword: {
                type: 'custom',
                test: (e) => /^[a-z]+$/i.test(e),
                parse(e) {
                    e = e.toLowerCase();
                    let t = {
                        spaceId: 'srgb',
                        coords: null,
                        alpha: 1
                    };
                    if (('transparent' === e ? ((t.coords = s.Z.black), (t.alpha = 0)) : (t.coords = s.Z[e]), t.coords)) return t;
                }
            }
        }
    });
