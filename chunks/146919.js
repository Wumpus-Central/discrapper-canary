n.d(t, { jP: () => c, gB: () => i, yB: () => d });
var o = n(582128),
    r = n(17928),
    a = n(775602),
    s = n(652525);
let l = "custom-cursors-styles",
    c = "custom-cursors",
    u = `
  :root {
    --custom-cursor: url(https://cdn.discordapp.com/assets/content/9f04e9b5b7689dbbecc8fbd15acc438f7f4af98592ee506716a71b2fcdc94e53.png) 8 4, auto;
    --custom-cursor-pointer: url(https://cdn.discordapp.com/assets/content/56cf15abd8c5bb2692721be700d1e934d6626590a316b1c23fdce48d5be6c225.png) 4 4, pointer;
  }

  .${c},
  .${c} [class*='BalanceWidgetMenu'] {
    cursor: var(--custom-cursor) !important;
  }

  /* Interactive elements get pointer cursor */
  .${c} button,
  .${c} [role='button'],
  .${c} a,
  .${c} input[type='button'],
  .${c} input[type='submit'],
  .${c} input[type='reset'],
  .${c} [role='menuitem'],
  .${c} [role='option'],
  .${c} [role='listitem'],
  .${c} [role='tab'],
  .${c} [role='radio'],
  .${c} [role='checkbox'],
  .${c} input[type='checkbox'],
  .${c} input[type='radio'],
  .${c} .menu-item,
  .${c} .dropdown-item,
  .${c} .select-option,
  .${c} .list-item,
  .${c} [style*='cursor: pointer'],
  .${c} [class*='cursor-pointer'],
  .${c} [class*='shopCard'],
  .${c} [class*='Card'],
  .${c} [class*='FeaturedCollection'],
  .${c} [class*='FeaturedChip'],
  .${c} [class*='FeaturedProduct'],
  .${c} [class*='productCardContainer'],
  .${c} [class*='collectiblesShopHeaderBar'],
  .${c} [class*='wrapper'],
  .${c} [class*='menu'],
  .${c} [class*='menuItem'],
  .${c} [class*='select'],
  .${c} [class*='option'],
  .${c} [class*='popout'],
  .${c} [class*='searchInput'],
  .${c} [class*='searchInputContainer'],
  .${c} [class*='searchInputContainerInput'],
  .${c} [class*='searchInputContainerIcon'],
  .${c} [class*='checkboxWrapper'],
  .${c} [class*='checkbox'],
  .${c} [class*='input'],
  .${c} [class*='label'],
  .${c} [class*='labelClickable'] {
    cursor: var(--custom-cursor-pointer) !important;
  }
`;
function i() {
    let e = d("useCustomCursorsCSS");
    o.useLayoutEffect(() => {
        if (!e) return;
        let t = document.getElementById(l);
        return (
            null == t && (((t = document.createElement("style")).id = l), document.head.appendChild(t)),
            (t.textContent = u),
            () => {
                t.textContent = "";
            }
        );
    }, [e]);
}
function d(e) {
    let t = (0, s.t)(e),
        n = (0, r.bG)([a.Ay], () => a.Ay.enableCustomCursor ?? !0);
    return t && n;
}
