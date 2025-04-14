n.d(t, {
    Q2: () => U,
    Rv: () => z,
    U6: () => G,
    UD: () => V,
    ZP: () => Y,
    oT: () => H
}),
    n(415506),
    n(539854);
var r,
    i = n(2818),
    s = n(186070),
    a = n(185514),
    l = n(395878),
    o = n(321697),
    c = n(775774),
    d = n(570408),
    u = n(438846),
    m = n(360038),
    g = n(175724),
    p = n(705371),
    h = n(138976),
    f = n(296805),
    b = n(561716),
    N = n(239748),
    x = n(337482),
    _ = n(679080),
    E = n(777019),
    j = n(523147),
    O = n(400332),
    C = n(908552),
    S = n(189509),
    v = n(673553),
    T = n(280492),
    I = n(746887),
    y = n(861007),
    A = n(89028),
    P = n(300644),
    R = n(721383),
    D = n(207234),
    Z = n(997292),
    w = n(743810),
    k = n(620212),
    W = n(188051),
    L = n(547420),
    B = n(981631),
    M = n(388032),
    U = (((r = {}).NAVIGATION = 'NAVIGATION'), (r.CHAT = 'CHAT'), (r.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO'), (r.MISCELLANEOUS = 'MISCELLANEOUS'), (r.MESSAGE = 'MESSAGE'), (r.DND = 'DND'), r);
function V(e) {
    switch (e) {
        case 'NAVIGATION':
            return M.NW.string(M.t['yGE+jo']);
        case 'VOICE_AND_VIDEO':
            return M.NW.string(M.t.bI8F5u);
        case 'CHAT':
            return M.NW.string(M.t.hDhbb2);
        case 'MISCELLANEOUS':
            return M.NW.string(M.t.cBdwqq);
        case 'MESSAGE':
            return M.NW.string(M.t['5fpmX1']);
        case 'DND':
            return M.NW.string(M.t['69j6+/']);
    }
}
function G(e) {
    switch (e) {
        case 'MESSAGE':
            return M.NW.string(M.t.iepGDg);
        case 'DND':
            return M.NW.string(M.t.LBsB0d);
        default:
            return null;
    }
}
function F() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = H[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let H = {
    [B.EkH.SERVER_NEXT]: C.nq,
    [B.EkH.SERVER_PREV]: C.X3,
    [B.EkH.CHANNEL_NEXT]: a.tQ,
    [B.EkH.CHANNEL_PREV]: a.x5,
    [B.EkH.NAVIGATE_BACK]: a.Nx,
    [B.EkH.NAVIGATE_FORWARD]: a.On,
    [B.EkH.UNREAD_NEXT]: w.pd,
    [B.EkH.UNREAD_PREV]: w.wk,
    [B.EkH.MENTION_CHANNEL_NEXT]: w.Nv,
    [B.EkH.MENTION_CHANNEL_PREV]: w.uX,
    [B.EkH.TOGGLE_PREVIOUS_GUILD]: a.$c,
    [B.EkH.JUMP_TO_GUILD]: m.u,
    [B.EkH.SUBMIT]: S.z,
    [B.EkH.TEXTAREA_FOCUS]: v.U,
    [B.EkH.MARK_CHANNEL_READ]: g.f,
    [B.EkH.MARK_SERVER_READ]: p.l,
    [B.EkH.TOGGLE_CHANNEL_PINS]: y.u,
    [B.EkH.TOGGLE_FOR_LATER]: A.f,
    [B.EkH.TOGGLE_INBOX]: D.a,
    [B.EkH.MARK_TOP_INBOX_CHANNEL_READ]: D.M,
    [B.EkH.TOGGLE_USERS]: Z.r,
    [B.EkH.TOGGLE_HELP]: P.O,
    [B.EkH.VIBE_WITH_WUMPUS]: W.w,
    [B.EkH.TOGGLE_MUTE]: T.iN,
    [B.EkH.TOGGLE_DEAFEN]: T.oV,
    [B.EkH.TOGGLE_CATEGORY_COLLAPSED]: I.u,
    [B.EkH.SEARCH_SOUNDBOARD]: j.Z,
    [B.EkH.SCROLL_UP]: x.B2,
    [B.EkH.SCROLL_DOWN]: x.gN,
    [B.EkH.QUICKSWITCHER_SHOW]: b.$,
    [B.EkH.CREATE_DM_GROUP]: l.K,
    [B.EkH.SEARCH_EMOJIS]: _.S,
    [B.EkH.SEARCH_GIFS]: E.O,
    [B.EkH.SEARCH_STICKERS]: O.U,
    [B.EkH.TOGGLE_HOTKEYS]: R._,
    [B.EkH.JUMP_TO_FIRST_UNREAD]: h.O,
    [B.EkH.CREATE_GUILD]: o.r,
    [B.EkH.UPLOAD_FILE]: k.U,
    [B.EkH.RETURN_TO_AUDIO_CHANNEL]: N.F,
    [B.EkH.CALL_ACCEPT]: s.IL,
    [B.EkH.CALL_START]: s.FI,
    [B.EkH.FOCUS_SEARCH]: d.I,
    [B.EkH.JUMP_TO_CURRENT_CALL]: u.K,
    [B.EkH.ZOOM_IN]: L.UF,
    [B.EkH.ZOOM_OUT]: L.RC,
    [B.EkH.ZOOM_RESET]: L.MY,
    [B.EkH.OPEN_APP_DIRECTORY]: f.T,
    [B.EkH.BROWSER_DEVTOOLS]: c.p
};
function z() {
    let e = [
            {
                description: M.NW.string(M.t.bx4Uy8),
                binds: F(B.EkH.SERVER_PREV, B.EkH.SERVER_NEXT),
                group: 'NAVIGATION'
            },
            {
                description: M.NW.string(M.t['+Wem6u']),
                binds: F(B.EkH.CHANNEL_PREV, B.EkH.CHANNEL_NEXT),
                group: 'NAVIGATION'
            },
            {
                description: M.NW.string(M.t['+2fcd3']),
                binds: F(B.EkH.NAVIGATE_BACK, B.EkH.NAVIGATE_FORWARD),
                group: 'NAVIGATION'
            },
            {
                description: M.NW.string(M.t.eVmj1N),
                binds: F(B.EkH.UNREAD_PREV, B.EkH.UNREAD_NEXT),
                group: 'NAVIGATION'
            },
            {
                description: M.NW.string(M.t.EcqS7e),
                binds: F(B.EkH.MENTION_CHANNEL_PREV, B.EkH.MENTION_CHANNEL_NEXT),
                group: 'NAVIGATION'
            },
            {
                description: M.NW.string(M.t['4I3pwc']),
                binds: F(B.EkH.JUMP_TO_CURRENT_CALL),
                group: 'NAVIGATION'
            },
            {
                description: M.NW.string(M.t['Bqss7+']),
                binds: F(B.EkH.TOGGLE_PREVIOUS_GUILD),
                group: 'NAVIGATION'
            },
            {
                description: M.NW.string(M.t.yYsRlJ),
                binds: F(B.EkH.QUICKSWITCHER_SHOW),
                group: 'NAVIGATION'
            },
            {
                description: M.NW.string(M.t.O7ouXF),
                binds: F(B.EkH.CREATE_GUILD),
                group: 'NAVIGATION',
                groupEnd: !0
            },
            {
                description: M.NW.string(M.t.Lns0FR),
                binds: ['mod+d'],
                group: 'DND'
            },
            {
                description: M.NW.string(M.t.dmMqa2),
                binds: ['up', 'down'],
                group: 'DND'
            },
            {
                description: M.NW.string(M.t['cs/HVF']),
                binds: ['spacebar', 'enter'],
                group: 'DND'
            },
            {
                description: M.NW.string(M.t['1ioMJS']),
                binds: ['esc'],
                group: 'DND',
                groupEnd: !0
            },
            {
                description: M.NW.string(M.t.UaXAPz),
                binds: F(B.EkH.MARK_SERVER_READ),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t['5X9vFh']),
                binds: F(B.EkH.MARK_CHANNEL_READ),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t.wxQFsr),
                binds: F(B.EkH.CREATE_DM_GROUP),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t['C+XV7e']),
                binds: F(B.EkH.TOGGLE_CHANNEL_PINS),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t['Q+YV/f']),
                binds: F(B.EkH.TOGGLE_INBOX),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t['YEjV+f']),
                binds: F(B.EkH.MARK_TOP_INBOX_CHANNEL_READ),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t.AcBI9f),
                binds: F(B.EkH.TOGGLE_USERS),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t.JoxNnp),
                binds: F(B.EkH.SEARCH_EMOJIS),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t['3PHxo6']),
                binds: F(B.EkH.SEARCH_GIFS),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t.YFl7eX),
                binds: F(B.EkH.SEARCH_STICKERS),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t.L3RYYG),
                binds: F(B.EkH.SCROLL_UP, B.EkH.SCROLL_DOWN),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t['3HAurK']),
                binds: F(B.EkH.JUMP_TO_FIRST_UNREAD),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t.rrYBEh),
                binds: F(B.EkH.TEXTAREA_FOCUS),
                group: 'CHAT'
            },
            {
                description: M.NW.string(M.t.sUJlPD),
                binds: F(B.EkH.UPLOAD_FILE),
                group: 'CHAT',
                groupEnd: !0
            },
            {
                description: M.NW.string(M.t.tL6eVV),
                binds: F(B.EkH.TOGGLE_MUTE),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: M.NW.string(M.t['QXe/7e']),
                binds: F(B.EkH.TOGGLE_DEAFEN),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: M.NW.string(M.t.d6UIio),
                binds: F(B.EkH.CALL_ACCEPT),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: M.NW.string(M.t.IcEW09),
                binds: F(B.EkH.MARK_CHANNEL_READ),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: M.NW.string(M.t.WN2dsb),
                binds: F(B.EkH.CALL_START),
                group: 'VOICE_AND_VIDEO',
                groupEnd: !0
            },
            {
                description: M.NW.string(M.t.rUK0kp),
                binds: F(B.EkH.SEARCH_SOUNDBOARD),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: M.NW.string(M.t.vkGkSk),
                binds: F(B.EkH.TOGGLE_HELP),
                group: 'MISCELLANEOUS'
            },
            {
                description: M.NW.string(M.t['FJvZ8/']),
                binds: F(B.EkH.FOCUS_SEARCH),
                group: 'MISCELLANEOUS'
            },
            {
                description: M.NW.string(M.t.HnNtEB),
                binds: ['h+h+right+n+k'],
                group: 'MISCELLANEOUS',
                groupEnd: !0
            },
            {
                description: M.NW.string(M.t.fsBWmZ),
                binds: ['e'],
                group: 'MESSAGE'
            },
            {
                description: M.NW.string(M.t.xwMqDw),
                binds: ['backspace'],
                group: 'MESSAGE'
            },
            {
                description: M.NW.string(M.t['CvQ18/']),
                binds: ['p'],
                group: 'MESSAGE'
            },
            {
                description: M.NW.string(M.t.lfIHs7),
                binds: ['plus'],
                group: 'MESSAGE'
            },
            {
                description: M.NW.string(M.t['5IEsGx']),
                binds: ['r'],
                group: 'MESSAGE'
            },
            {
                description: M.NW.string(M.t.zSyDdH),
                binds: ['f'],
                group: 'MESSAGE'
            },
            {
                description: M.NW.string(M.t.JrGD7O),
                binds: ['mod+c'],
                group: 'MESSAGE'
            },
            {
                description: M.NW.string(M.t.RpE9k5),
                binds: ['alt+enter'],
                group: 'MESSAGE'
            },
            {
                description: M.NW.string(M.t.rrYBEh),
                binds: ['escape'],
                group: 'MESSAGE',
                groupEnd: !0
            },
            {
                description: M.NW.string(M.t.z9c6mp),
                binds: F(B.EkH.VIBE_WITH_WUMPUS),
                group: 'MISCELLANEOUS'
            }
        ],
        { enabled: t, inInbox: n } = i.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
    return (
        t &&
            !n &&
            e.push({
                description: M.NW.string(M.t.IWNSoK),
                binds: F(B.EkH.TOGGLE_FOR_LATER),
                group: 'CHAT'
            }),
        e
    );
}
let Y = 12633 == n.j ? H : null;
