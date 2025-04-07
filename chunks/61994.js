n.d(t, { Z: () => i }), n(804061), n(704826), n(35282), n(781311);
let r = /[<>:"/\\|?*\.]/g,
    i = function (e) {
        return e.replaceAll(r, '').trim().replaceAll(' ', '_');
    };
