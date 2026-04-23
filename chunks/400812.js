n.d(t, { Hy: () => s, kd: () => r, mj: () => a, ql: () => o, ti: () => d });
var i,
    l,
    s =
        (((i = {})[(i.LANDING = 0)] = "LANDING"),
        (i[(i.SAFETY_CHECK = 1)] = "SAFETY_CHECK"),
        (i[(i.DEFAULT_CHANNELS = 2)] = "DEFAULT_CHANNELS"),
        (i[(i.WELCOME_CARD = 3)] = "WELCOME_CARD"),
        (i[(i.CUSTOMIZATION_QUESTIONS = 4)] = "CUSTOMIZATION_QUESTIONS"),
        (i[(i.REVIEW = 5)] = "REVIEW"),
        (i[(i.HOME_SETTINGS = 6)] = "HOME_SETTINGS"),
        (i[(i.CONNECTIONS = 7)] = "CONNECTIONS"),
        i);
let r = [0, 1, 2, 4, 6, 5];
var a =
    (((l = {})[(l.TOGGLE_ENABLED = 0)] = "TOGGLE_ENABLED"),
    (l[(l.TOGGLE_DISABLED = 1)] = "TOGGLE_DISABLED"),
    (l[(l.PREVIEW = 2)] = "PREVIEW"),
    (l[(l.EDIT_DEFAULT_CHANNELS = 3)] = "EDIT_DEFAULT_CHANNELS"),
    (l[(l.EDIT_CUSTOMIZATION_QUESTIONS = 4)] = "EDIT_CUSTOMIZATION_QUESTIONS"),
    (l[(l.EDIT_HOME_SETTINGS = 5)] = "EDIT_HOME_SETTINGS"),
    (l[(l.EDIT_CONNECTIONS = 6)] = "EDIT_CONNECTIONS"),
    l);
let d = r.filter((e) => 0 !== e);
function o(e) {
    switch (e) {
        case 1:
            return "Safety Check";
        case 2:
            return "Default Channels";
        case 4:
            return "Customization Questions";
        case 6:
            return "Home Settings";
        default:
            return null;
    }
}
