n.d(t, {
    $j: () => p,
    Eo: () => c,
    Fr: () => i,
    Kj: () => a,
    Kr: () => f,
    RF: () => l,
    XA: () => u,
    ZK: () => d
}),
    n(653041),
    n(47120),
    n(86693),
    n(536091),
    n(301563),
    n(866573),
    n(642549),
    n(787622),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(610885),
    n(126298),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var r = n(481060),
    i = (function (e) {
        return (e.HERO_BANNER_STATIC = 'hero_banner'), (e.HERO_BANNER_ANIMATED = 'hero_banner_animated'), (e.HERO_LOGO = 'hero_logo'), (e.FEATURED_BLOCK = 'featured_block'), (e.CATEGORY_BANNER_STATIC = 'category_banner'), (e.CATEGORY_BANNER_ANIMATED = 'category_banner_animated'), (e.UPSELL_BANNER = 'upsell_banner'), (e.UPSELL_BANNER_POPOUT = 'upsell_popout'), (e.PDP_BACKGROUND = 'pdp_bg'), (e.PDP_LOGO = 'pdp_logo'), (e.COLLECTED_MODAL_BG = 'collected_modal_bg'), e;
    })({});
let o = '.DS_Store',
    a = {
        'hero_banner.jpg': 'hero_banner',
        'hero_banner_animated.webm': 'hero_banner_animated',
        'hero_logo.png': 'hero_logo',
        'featured_block.png': 'featured_block',
        'category_banner.jpg': 'category_banner',
        'category_banner_animated.webm': 'category_banner_animated',
        'upsell_banner.png': 'upsell_banner',
        'upsell_banner_popout.png': 'upsell_popout',
        'pdp_bg.jpg': 'pdp_bg',
        'pdp_logo.png': 'pdp_logo',
        'collected_modal_bg.jpg': 'collected_modal_bg'
    },
    s = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = e,
                r = await new Promise((e) => n.file(e));
            r.name !== o && t.push(r);
        } else if (e.isDirectory) {
            let n = e.createReader(),
                r = await new Promise((e) => n.readEntries(e)),
                i = await Promise.all(r.map((e) => s(e)));
            t.push(...i.flat());
        }
        return t;
    },
    l = async (e) => {
        let t = e.map((e) => s(e));
        return (await Promise.all(t)).flat();
    },
    c = (e) => {
        (0, r.showToast)((0, r.createToast)(e, r.ToastType.FAILURE));
    },
    u = (e) => {
        (0, r.showToast)((0, r.createToast)(e, r.ToastType.SUCCESS));
    },
    d = (e, t, n) => {
        let r = new FileReader();
        (r.onload = (r) => {
            if (null == r.target || 'string' != typeof r.target.result) {
                null == n || n('Error uploading file. Try again!');
                return;
            }
            t(e, r.target.result);
        }),
            r.readAsDataURL(e);
    },
    f = (e, t, n) => {
        if (0 === e.length) {
            null == n || n('No files found!');
            return;
        }
        for (let r of e) d(r, t, n);
    },
    _ = (e) => {
        let [t, n] = e.split(','),
            r = atob(n),
            i = t.split(';')[0],
            o = new Uint8Array(r.length);
        for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
        return new Blob([o], { type: i });
    },
    p = (e) => {
        let t = _(e);
        return URL.createObjectURL(t);
    };
