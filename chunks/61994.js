n.d(t, { Z: () => i }), n(627494), n(757143), n(301563), n(566702);
let r = /[<>:"/\\|?*\.]/g,
    i = function (e) {
        return e.replaceAll(r, '').trim().replaceAll(' ', '_');
    };
