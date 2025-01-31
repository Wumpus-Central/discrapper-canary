n.d(t, { Z: () => r }), n(627494), n(757143);
let i = /[<>:"/\\|?*\.]/g,
    r = function (e) {
        return e.replaceAll(i, '').trim().replaceAll(' ', '_');
    };
