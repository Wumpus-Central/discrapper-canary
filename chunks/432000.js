"use strict";
n.d(t, { m: () => a });
var i = n(998218);
let r = new Set(
        JSON.parse(
            '["7z","ade","adp","arj","apk","appimage","application","appx","appxbundle","asx","bas","bat","cab","cer","chm","cmd","cnt","cpl","crt","csh","deb","der","diagcab","dll","dmg","docm","dotm","ex","ex_","exe","flatpak","flatpakref","fxp","gadget","grp","gz","hlp","hpj","hta","htc","inf","ins","ipa","iso","isp","its","jar","jnlp","jse","ksh","lib","lnk","mad","maf","mag","mam","maq","mar","mas","mat","mau","mav","maw","mcf","mda","mdb","mde","mdt","mdw","mdz","msc","msh","msh1","msh1xml","msh2","msh2xml","mshxml","msi","msix","msixbundle","msp","mst","msu","nsh","ops","osd","pcd","pif","pkg","pl","plg","potm","ppam","ppsm","pptm","prf","prg","printerexport","ps1","ps1xml","ps2","ps2xml","psc1","psc2","psd1","psdm1","pst","py","pyc","pyo","pyw","pyz","pyzw","rar","reg","rpm","scf","scr","sct","shb","shs","sldm","snap","sys","theme","tmp","url","vb","vbe","vbp","vbs","vhd","vhdx","vsmacros","vsw","vxd","webpnp","ws","wsc","wsf","wsh","xbap","xlam","xll","xlsm","xltm","xnk","z","zip"]',
        ),
    ),
    s = {
        "github.com": RegExp("/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*"),
        "bitbucket.org": RegExp("/downloads\\S*/[^/]*"),
        "gitlab.com": RegExp("/downloads\\S*/[^/]*"),
    };
function a(e) {
    let { pathname: t, hostname: n } = i.A.toURLSafe(e) ?? {};
    if (null == n) return null;
    let a = s[n];
    if ((null != a && null != t && !a.test(t)) || null == t) return null;
    let o = t;
    try {
        o = decodeURIComponent(t);
    } catch (e) {}
    let l = o.split("/"),
        d = null,
        _ = 0;
    for (let e = l.length - 1; e >= 0; e--) {
        let t = l[e];
        if ("" !== t && "." !== t) {
            if (".." === t) {
                _++;
                continue;
            }
            if (_ > e) break;
            d = l[e - _];
            break;
        }
    }
    if (null == d) return null;
    let u = d.split(".");
    if (u.length < 2) return null;
    let c = u.pop()?.toLowerCase();
    return null != c && r.has(c) ? c : null;
}
