o.d(t, {
    Z: () => l,
    b: () => i
}),
    o(388685);
var n,
    r = o(388032),
    i = (((n = {}).COULD_NOT_HEAR_AUDIO = "I couldn't hear audio at all"), (n.NOBODY_COULD_HEAR_ME = 'Nobody could hear me'), (n.AUDIO_ECHOS = 'Audio had echos or feedback'), (n.AUDIO_ROBOTIC = 'Audio was robotic or distorted'), (n.AUDIO_CUT = 'Audio cut in and out'), (n.BAD_VOLUME = 'Volume was too low or high'), (n.BACKGROUND_NOISE = 'Background noise was too loud'), (n.SPEAKERPHONE = 'Issues with speakerphone'), (n.HEADSET = 'Issues with headset/bluetooth'), (n.VIBES_OFF = 'People were toxic or inappropriate'), (n.OTHER = 'Other'), n);
function l(e) {
    let { isMobile: t, showVibesHoneypot: o } = e,
        n = [
            {
                label: r.intl.string(r.t['UqD/9f']),
                code: 2,
                value: "I couldn't hear audio at all"
            },
            {
                label: r.intl.string(r.t.DVEGuL),
                code: 3,
                value: 'Nobody could hear me'
            },
            {
                label: r.intl.string(r.t['2nWcBw']),
                code: 4,
                value: 'Audio had echos or feedback'
            },
            {
                label: r.intl.string(r.t.K3E4Dw),
                code: 5,
                value: 'Audio was robotic or distorted'
            },
            {
                label: r.intl.string(r.t.Dpm2U1),
                code: 6,
                value: 'Audio cut in and out'
            },
            {
                label: r.intl.string(r.t.kuGsi4),
                code: 7,
                value: 'Volume was too low or high'
            },
            {
                label: r.intl.string(r.t.PkiFCQ),
                code: 8,
                value: 'Background noise was too loud'
            },
            {
                label: r.intl.string(r.t.hvIDwc),
                code: 9,
                value: 'Issues with speakerphone'
            },
            {
                label: r.intl.string(r.t['+gUm1t']),
                code: 10,
                value: 'Issues with headset/bluetooth'
            },
            {
                label: r.intl.string(r.t['++JLLy']),
                code: 11,
                value: 'People were toxic or inappropriate'
            },
            {
                label: r.intl.string(r.t['emlT9/']),
                code: 1,
                value: 'Other'
            }
        ],
        i = new Set();
    return t || i.add('Issues with speakerphone'), o || i.add('People were toxic or inappropriate'), n.filter((e) => !i.has(e.value));
}
